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

module.exports = router;