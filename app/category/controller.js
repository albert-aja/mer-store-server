module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        title: "Judul Baru",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
