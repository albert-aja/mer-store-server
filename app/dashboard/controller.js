module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        name: req.session.user.name,
        title: "Admin Dashboard",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
