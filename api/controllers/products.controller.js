const ProductBO = require("../../models/bo/products.bo");
const nanoid = require("../../utils/nanoid");
const logger = require("../../utils/logger");

module.exports.index = async (req, res) => {
  try {
    let products = await ProductBO.getAll();

    return res.status(200).json({
      data: products,
      total: products.length,
      status: true
    });
  } catch (e) {
    logger.error(e);
    return res.status(400).json({
      message: "Have error",
      status: false
    });
  }
};

module.exports.detail = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await ProductBO.getById(productId);

    if (product) {
      return res.status(200).json({
        data: product,
        status: true
      });
    }

    return res.status(400).json({
      message: "Not found",
      status: false
    });
  } catch (e) {
    logger.error(e);
    return res.status(400).json({
      message: "Have error",
      status: false
    });
  }
};

module.exports.create = async (req, res) => {
  const product = req.body;
  try {
    product.id = nanoid();
    const result = await ProductBO.create(product);

    if (result.affectedRows) {
      return res.status(200).json({
        data: product,
        status: true
      });
    }

    return res.status(400).json({
      status: false
    });
  } catch (e) {
    logger.error(e);
    return res.status(400).json({
      message: "Have error",
      status: false
    });
  }
};

module.exports.update = async (req, res) => {
  const { productId } = req.params;
  const product = req.body;
  try {
    product.id = productId;
    const result = await ProductBO.update(productId, product);

    if (result.affectedRows) {
      return res.status(200).json({
        data: product,
        status: true
      });
    }

    return res.status(400).json({
      status: false
    });
  } catch (e) {
    logger.error(e);
    return res.status(400).json({
      message: "Have error",
      status: false
    });
  }
};

module.exports.stopBusiness = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await ProductBO.stopBusiness(productId);

    if (result.affectedRows) {
      return res.status(200).json({
        status: true
      });
    }

    return res.status(400).json({
      status: false
    });
  } catch (e) {
    logger.error(e);
    return res.status(400).json({
      message: "Have error",
      status: false
    });
  }
};

module.exports.selling = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await ProductBO.selling(productId);

    if (result.affectedRows) {
      return res.status(200).json({
        status: true
      });
    }

    return res.status(400).json({
      status: false
    });
  } catch (e) {
    logger.error(e);
    return res.status(400).json({
      message: "Have error",
      status: false
    });
  }
};
