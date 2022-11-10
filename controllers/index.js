let UserController = require("./user.controller");
let ProdukController = require("./produk.controller");

module.exports = (app) => {
  app.use("/user", UserController);
  app.use("/produk", ProdukController);
};
