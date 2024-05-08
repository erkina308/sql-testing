const { fetchAllEmployees } = require("../models/employeesModel");

exports.getAllEmployees = async (req, res, next) => {
  const employees = await fetchAllEmployees();
  res.status(200).json({ employees: employees });
};
