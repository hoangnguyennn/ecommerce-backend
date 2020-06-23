const mysql = require("mysql");

module.exports = (dbConfig) =>
  new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((error) =>
      error ? reject(error) : resolve(connection)
    );
  });
