require("dotenv").config();
const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
const port = 9090;

app.use(express.json());

app.use("/api", apiRouter);

const server = app.listen(port, () => {
  console.log("http://localhost:9090");
  console.log(`Server running on port ${port}`);
});

server.on("error", (err) => {
  console.error(err, "Error Message");
});

module.exports = app;
