const router = require("express").Router({ mergeParams: true });

const ProductAPI = require("./products.route");
const BrandAPI = require("./brands.route");

router.use("/api/products", ProductAPI);
router.use("/api/brands", BrandAPI);

module.exports = router;
