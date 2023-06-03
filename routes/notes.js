const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json();
});
router.get("/api/notes");

module.exports = router;
