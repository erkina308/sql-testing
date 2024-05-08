const express = require("express");
const router = express.Router();
const { getAllDepartments } = require("../controllers/departmentsController");

router.get("/", getAllDepartments);

module.exports = router;
