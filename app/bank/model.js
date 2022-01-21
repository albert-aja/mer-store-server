const mongoose = require("mongoose");

let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama Pemilik harus diisi"],
    },
    bankName: {
      type: String,
      require: [true, "Nama Bank harus diisi"],
    },
    noRek: {
      type: String,
      require: [true, "Nomor Rekening Bank harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
