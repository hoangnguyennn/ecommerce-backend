const OrderBO = require("../../models/bo/orders.bo");
const logger = require("../../utils/logger");

module.exports.create = async (req, res) => {
  const { decode } = res.locals;
  const order = req.body;

  try {
    if (order.details.length === 0) {
      return res.status(400).json({
        message: "Giỏ hàng rỗng",
        success: false
      });
    }

    order.customerId = decode.customerId;
    const result = await OrderBO.create(order);

    return res.status(200).json({
      data: result,
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

module.exports.index = async (req, res) => {
  try {
    const orders = await OrderBO.getAll();

    return res.status(200).json({
      data: orders,
      total: orders.length,
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
