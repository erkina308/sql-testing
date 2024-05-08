const express = require("express");
const departmentsRouter = require("./departmentsRouter");
const employeesRouter = require("./employeesRouter");
const ordersRouter = require("./ordersRouter");

const apiRouter = express.Router();

apiRouter.use("/departments", departmentsRouter);
apiRouter.use("/employees", employeesRouter);
apiRouter.use("/orders", ordersRouter);

module.exports = apiRouter;
