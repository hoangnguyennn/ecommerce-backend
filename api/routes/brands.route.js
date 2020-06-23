const router = require("express").Router();
const controller = require("../controllers/brands.controller");

router.get("/", controller.index);
router.post("/", controller.create);

router.get("/:brandId", controller.detail);

module.exports = router;
