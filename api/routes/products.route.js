const router = require("express").Router();
const controller = require("../controllers/products.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.get("/", controller.index);
router.post("/", authMiddleware.checkAdmin, controller.create);

router.get("/:productId", controller.detail);
router.put("/:productId", authMiddleware.checkAdmin, controller.update);

router.post(
  "/:productId/stop-business",
  authMiddleware.checkAdmin,
  controller.stopBusiness
);
router.post(
  "/:productId/selling",
  authMiddleware.checkAdmin,
  controller.selling
);

module.exports = router;
