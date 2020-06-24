const EmployeeDAO = require("../dao/employees.dao");

module.exports.getByUsername = (username) => {
  return EmployeeDAO.getByUsername(username).then((array) => array[0]);
};
