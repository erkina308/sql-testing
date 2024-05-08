const express = require("express");
const departmentsRouter = require("./departmentsRouter");
const employeesRouter = require("./employeesRouter");

const apiRouter = express.Router();

apiRouter.use("/departments", departmentsRouter);
apiRouter.use("/employees", employeesRouter);

module.exports = apiRouter;
