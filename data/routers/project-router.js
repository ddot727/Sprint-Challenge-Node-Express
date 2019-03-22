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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectDb.get(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "error retrieving project" });
  }
});

router.get("/:id/actions", (req,res) => {
  projectDb.getProjectActions(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(error =>
      res.status(500).json({
        message: "error getting project actions"
      }))
})

module.exports = router;