const express = require("express");

const userRouter = express.Router();

const {createUserAccount,checkIfUserExists} = require("../controllers/userControl");
const {getCartByUserId} = require("../controllers/cartControl");
const { createCart } = require("../controllers/cartControl");
const { preferenceRouter } = require("./preferenceRouter");

// Define sub route for user signin
userRouter.route("/signin")
.post(checkIfUserExists);

// Define sub route for user signup
userRouter.route("/signup")
.post(createUserAccount);

userRouter.route("/cart")
.post(createCart)
.get(getCartByUserId);


userRouter.use("/preferences", preferenceRouter)


module.exports = { userRouter };
