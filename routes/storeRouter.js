const express = require("express");

const storeRouter = express.Router();

const {
  createStoreAccount,
  checkIfStoreExists,
} = require("../controllers/storeControl");
const {
  createProduct,
  getProductsByStoreId,
} = require("../controllers/productControl");
const {
  createCategory,
  getCategoriesByStoreId,
} = require("../controllers/categoryControl");

// Define sub route for store signin
storeRouter.route("/signin")
.post(checkIfStoreExists);

// Define sub route for store signup
storeRouter.route("/signup")
.post(createStoreAccount);

storeRouter.route("/product")
.get(getProductsByStoreId)
.post(createProduct);

storeRouter.route("/category")
.get(getCategoriesByStoreId)
.post(createCategory);

module.exports = { storeRouter };
