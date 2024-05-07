const db = require("../connection");

exports.fetchAllDepartments = async () => {
  const departments = await db.query(`SELECT * FROM departments;`);
  return departments.rows;
};
