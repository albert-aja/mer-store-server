var express = require("express");
var router = express.Router();
const { signup, signin } = require("./controller");
const multer = require("multer");
const os = require("os");

router.post("/signup", multer({ dest: os.tmpdir() }).single("avatar"), signup);
router.post("/signin", signin);

module.exports = router;
