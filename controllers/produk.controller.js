const express = require("express");
const router = express.Router();

let data = [
  {
    name: "indra",
    umur: 12,
  },
];
router.get("/", function (req, res) {
  res.json("ini halaman produk");
});

module.exports = router;
