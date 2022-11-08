const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ pesan: "ini user" });
});

module.exports = router;
