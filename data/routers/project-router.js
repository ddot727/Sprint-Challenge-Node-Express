const express = require("express");
const router = express.Router();

const projectDb = require("../helpers/projectModel.js");

router.get("/", async (req, res) => {
  try {
    const project = await projectDb.get();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "error getting projects"
    });
  }
});

module.exports = router;