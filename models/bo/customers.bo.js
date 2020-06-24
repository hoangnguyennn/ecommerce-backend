const CustomerDAO = require("../dao/customers.dao");

module.exports.getByUsername = (username) => {
  return CustomerDAO.getByUsername(username).then((array) => array[0]);
};
