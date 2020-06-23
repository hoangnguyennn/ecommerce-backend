const router = require("express").Router();
const controller = require("../controllers/products.controller");

router.get("/", controller.index);
router.post("/", controller.create);

router.get("/:productId", controller.detail);
router.put("/:productId", controller.update);

router.post("/:productId/stop-business", controller.stopBusiness);
router.post("/:productId/selling", controller.selling);

module.exports = router;
