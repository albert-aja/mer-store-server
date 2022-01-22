var express = require("express");
var router = express.Router();
const {
  landingPage,
  detailPage,
  category,
  checkout,
  history,
  historyDetail,
  dashboard,
  getProfile,
  editProfile,
} = require("./controller");

const multer = require("multer");
const os = require("os");

const { isLoginUser } = require("../middleware/auth");

router.get("/landingpage", landingPage);
router.get("/:id/detail", detailPage);
router.get("/category", category);
router.post("/checkout", isLoginUser, checkout);
router.get("/history", isLoginUser, history);
router.get("/history/:id/detail", isLoginUser, historyDetail);
router.get("/dashboard", isLoginUser, dashboard);
router.get("/profile", isLoginUser, getProfile);
router.put(
  "/profile",
  isLoginUser,
  multer({ dest: os.tmpdir() }).single("avatar"),
  editProfile
);

module.exports = router;
