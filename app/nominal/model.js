const mongoose = require("mongoose");

let nominalSchema = mongoose.Schema(
  {
    coinQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    coinName: {
      type: String,
      require: [true, "Nama Koin harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nominal", nominalSchema);
