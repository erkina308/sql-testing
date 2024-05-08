const { fetchAllDepartments } = require("../models/departmentsModel");

exports.getAllDepartments = async (req, res, next) => {
  const departments = await fetchAllDepartments();
  res.status(200).json({ departments: departments });
};
