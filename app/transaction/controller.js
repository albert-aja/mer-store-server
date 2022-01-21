const Transaction = require("./model");
const Bank = require("../bank/model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };

      const transaction = await Transaction.find();
      res.render("admin/transaction/view_transaction", {
        transaction,
        alert,
        name: req.session.user.name,
        title: "Halaman Pembayaran",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
  viewCreate: async (req, res) => {
    try {
      const bank = await Bank.find();
      res.render("admin/transaction/create", {
        bank,
        name: req.session.user.name,
        title: "Halaman Tambah Pembayaran",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { type, banks } = req.body;

      let transaction = await Transaction({ type, banks });
      await transaction.save();

      req.flash("alertMessage", "Berhasil tambah transaction.");
      req.flash("alertStatus", "success");

      res.redirect("/transaction");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;

      let transaction = await Transaction.findOne({ _id: id }).populate(
        "banks"
      );
      const bank = await Bank.find();

      res.render("admin/transaction/edit", {
        transaction,
        bank,
        name: req.session.user.name,
        title: "Halaman Edit Pembayaran",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { type, banks } = req.body;

      await Transaction.findOneAndUpdate(
        {
          _id: id,
        },
        { type, banks }
      );

      req.flash("alertMessage", "Berhasil edit transaction.");
      req.flash("alertStatus", "success");

      res.redirect("/transaction");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;

      await Transaction.findOneAndRemove({
        _id: id,
      });

      req.flash("alertMessage", "Berhasil hapus transaction.");
      req.flash("alertStatus", "success");

      res.redirect("/transaction");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
};
