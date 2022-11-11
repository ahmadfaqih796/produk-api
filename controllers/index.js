let UserController = require("./user.controller");
let ProdukController = require("./produk.controller");
let KategoriController = require("./kategori.controller");

module.exports = (app) => {
  app.use("/user", UserController);
  app.use("/produk", ProdukController);
  app.use("/kategori", KategoriController);
};
