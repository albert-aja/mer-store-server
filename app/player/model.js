const mongoose = require("mongoose");

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus diisi"],
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      minlength: [3, "Nama harus memiliki setidaknya 3 karakter"],
      maxlength: [255, "Panjang maksimal nama adalah 255 karakter"],
    },
    username: {
      type: String,
      require: [true, "Username harus diisi"],
      minlength: [3, "Username harus memiliki setidaknya 3 karakter"],
      maxlength: [255, "Panjang maksimal Username adalah 255 karakter"],
    },
    password: {
      type: String,
      require: [true, "Password harus diisi"],
      minlength: [8, "Password harus memiliki setidaknya 8 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor Telepon harus diisi"],
      minlength: [9, "Nomor Telepon harus memiliki setidaknya 9 karakter"],
      maxlength: [13, "Panjang maksimal nomor telepon adalah 13 karakter"],
    },
    favorit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
