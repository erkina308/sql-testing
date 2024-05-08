const express = require("express");
const router = express();
const { getAllEmployees } = require("../controllers/employeesController");

router.get("/", getAllEmployees);

module.exports = router;
