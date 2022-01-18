const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name Kategori harus diisi"],
  },
});

module.exports = mongoose.model("Category", categorySchema);
