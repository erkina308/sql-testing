const db = require("../connection");

exports.fetchAllOrders = async () => {
  const orders = await db.query(`SELECT * FROM orders;`);
  return orders.rows;
};
