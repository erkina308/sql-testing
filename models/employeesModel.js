const db = require("../connection");

exports.fetchAllEmployees = async () => {
  const employees = await db.query(`SELECT * FROM employees;`);
  return employees.rows;
};
