var express = require("express");
var router = express.Router();
const {
  index,
  actionStatus,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
} = require("./controller");

const { isLogin } = require("../middleware/auth");

router.use(isLogin);

router.get("/", index);
router.put("/status/:id", actionStatus);
router.get("/create", viewCreate);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/edit/:id", actionEdit);
router.delete("/delete/:id", actionDelete);

module.exports = router;
