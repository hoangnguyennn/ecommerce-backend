const jwt = require("jsonwebtoken");
const logger = require("./logger");

function Token(secret, option) {
  this.secret = secret;
  this.option = option;
}

Token.prototype.getToken = function (payload) {
  return jwt.sign(payload, this.secret, this.option);
};

Token.prototype.decodeToken = function (token) {
  try {
    const decode = jwt.verify(token, this.secret, this.option);
    return decode;
  } catch (e) {
    throw new Error(e);
  }
};

const secret = process.env.TOKEN_SECRET;
const option = {
  algorithm: process.env.TOKEN_ALGORITHM,
  expiresIn: process.env.TOKEN_EXPIRES_IN
};

const token = new Token(secret, option);

module.exports = token;
