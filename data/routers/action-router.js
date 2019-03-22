const express = require("express");

const actionDb = require("../helpers/actionModel.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await actionDb.get();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
      message: "error getting actions"
    });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDb.get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
        message: "error getting action"
      })
    })
})

router.post("/", async (req, res) => {
  try {
    const action = await actionDb.insert(req.body)
    res.status(201).json(action)
  } catch (error) {
    res.status(500).json({
      message: "error adding action"
    })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = await actionDb.update(id, req.body);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({
      message: "error updating action"
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const remove = await actionDb.remove(id);
    res.status(200).json({
      message: "Delete Successful"
    })
  } catch (error) {
    res.status(500).json({
      message: "error deleting action"
    })
  }
})

module.exports = router;