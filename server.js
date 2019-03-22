const express = require("express");

const actionRouter =require("./data/routers/action-router.js");
const projectRouter = require("./data/routers/project-router.js");

const server = express();

server.use(express.json());
server.use("/api/action", actionRouter);
server.use("/api/project", projectRouter);

server.get("/", (req, res) => {
  res.send("Here come dat boi");
});

module.exports = server;