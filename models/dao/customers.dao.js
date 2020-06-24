const dbConfig = require("../../configs/dbConfig");
const connection = require("../../helpers/connection");
const query = require("../../helpers/query");

module.exports.getByUsername = async (username) => {
  try {
    const conn = await connection(dbConfig);
    const sql = "select * from customers where username = ?";

    return query(conn, sql, [username]);
  } catch (e) {
    throw new Error(e);
  }
};
