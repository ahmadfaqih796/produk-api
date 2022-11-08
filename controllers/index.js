let UserController = require("./user.controller");

module.exports = (app) => {
  app.use("/user", UserController);
};
