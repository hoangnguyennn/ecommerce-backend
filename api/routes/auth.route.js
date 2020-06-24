const router = require("express").Router();
const controller = require("../controllers/auth.controller");

router.post("/login", controller.login);
router.post("/admin-login", controller.adminLogin);

module.exports = router;
