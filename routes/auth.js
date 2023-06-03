const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "Animesh",
    num: 12,
  };
  res.json(obj);
});
router.get("/api/auth");

module.exports = router;
