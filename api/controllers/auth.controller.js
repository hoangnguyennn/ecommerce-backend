const CustomerBO = require("../../models/bo/customers.bo");
const EmployeeBO = require("../../models/bo/employees.bo");
const Token = require("../../utils/token");
const logger = require("../../utils/logger");

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const customer = await CustomerBO.getByUsername(username);

    if (!customer) {
      return res.status(401).json({
        message: "Account not found",
        status: false
      });
    }

    if (customer.password !== password) {
      return res.status(401).json({
        message: "Wrong password",
        status: false
      });
    }

    const payload = { sub: customer.id };
    const accessToken = Token.getToken(payload);
    const userResponse = {
      id: customer.id,
      fullName: customer.fullName,
      address: customer.address,
      phone: customer.phone
    };

    res.cookie("accessToken", accessToken, {
      httpOnly: true
    });
    return res.status(200).json({
      data: userResponse,
      success: true
    });
  } catch (e) {
    logger.error(e);
    return res.status(401).json({
      message: "Have error",
      status: false
    });
  }
};

module.exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const employee = await EmployeeBO.getByUsername(username);

    if (!employee) {
      return res.status(401).json({
        message: "Account not found",
        status: false
      });
    }

    if (employee.password !== password) {
      return res.status(401).json({
        message: "Wrong password",
        status: false
      });
    }

    const payload = { sub: employee.id, isAdmin: true };
    const accessToken = Token.getToken(payload);
    const userResponse = {
      id: employee.id,
      fullName: employee.fullName,
      address: employee.address,
      phone: employee.phone
    };

    res.cookie("accessToken", accessToken, {
      httpOnly: true
    });
    return res.status(200).json({
      data: userResponse,
      success: true
    });
  } catch (e) {
    logger.error(e);
    return res.status(401).json({
      message: "Have error",
      status: false
    });
  }
};
