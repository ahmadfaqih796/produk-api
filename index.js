const express = require("express");
const aplikasi = express();

let karyawan = [
  {
    name: "ahmad",
    umur: 12,
  },
  {
    name: "faqih",
    umur: 14,
  },
];
// [] => data objek
// {} => data array
aplikasi.get("/", function (request, response) {
  response.json({ pesan: "data berhasil di ambil", data: karyawan });
});
// ini komentar
aplikasi.listen(3002);
