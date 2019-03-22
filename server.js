const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Here come dat boi");
});

module.exports = server;