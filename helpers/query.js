module.exports = (conn, q, params) =>
  new Promise((resolve, reject) => {
    const handler = (error, result) => {
      if (error) reject(error);
      resolve(result);
      conn.end();
    };

    return conn.query(q, params, handler);
  });
