const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ pesan: "ini nama produk" });
});
module.exports = router;
