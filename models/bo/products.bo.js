const ProductDAO = require("../dao/products.dao");

module.exports.getAll = () => {
  return ProductDAO.getAll();
};

module.exports.getById = (productId) => {
  return ProductDAO.getById(productId).then((array) => array[0]);
};

module.exports.create = (product) => {
  return ProductDAO.create(product);
};

module.exports.update = (productId, newProduct) => {
  return ProductDAO.update(productId, newProduct);
};

module.exports.stopBusiness = (productId) => {
  return ProductDAO.stopBusiness(productId);
};

module.exports.selling = (productId) => {
  return ProductDAO.selling(productId);
};
