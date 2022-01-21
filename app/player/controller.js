const Player = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };

      const player = await Player.find();
      res.render("admin/player/view_player", {
        player,
        alert,
        name: req.session.user.name,
        title: "Halaman Player",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/player/create", {
        name: req.session.user.name,
        title: "Halaman Tambah Player",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name, playerName, noRek } = req.body;

      let player = await Player({ name, playerName, noRek });
      await player.save();

      req.flash("alertMessage", "Berhasil tambah player.");
      req.flash("alertStatus", "success");

      res.redirect("/player");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;

      let player = await Player.findOne({ _id: id });

      res.render("admin/player/edit", {
        player,
        name: req.session.user.name,
        title: "Halaman Edit Player",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, playerName, noRek } = req.body;

      await Player.findOneAndUpdate(
        {
          _id: id,
        },
        { name, playerName, noRek }
      );

      req.flash("alertMessage", "Berhasil edit player.");
      req.flash("alertStatus", "success");

      res.redirect("/player");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;

      await Player.findOneAndRemove({
        _id: id,
      });

      req.flash("alertMessage", "Berhasil hapus player.");
      req.flash("alertStatus", "success");

      res.redirect("/player");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
};
