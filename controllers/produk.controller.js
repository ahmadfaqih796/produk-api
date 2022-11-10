const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json("ini halaman produk");
});

module.exports = router;
