const express = require("express");
const signupAPI = require("./signup");
const signinAPI = require("./signin");

const createProductAPI = require("./product/createProduct");
const readProductAPI = require("./product/readProduct");
const updateProductAPI = require("./product/updateProduct");
const deleteProductAPI = require("./product/daleteProduct");
const router = express.Router();

router.use(signupAPI);
router.use(signinAPI);

//product
router.use(createProductAPI);
router.use(updateProductAPI);
router.use(readProductAPI);
router.use(deleteProductAPI);

module.exports = router;
