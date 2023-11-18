const express = require("express");
const signupAPI = require("./signup");
const signinAPI = require("./signin");
//product
const createProductAPI = require("./product/createProduct");
const readProductAPI = require("./product/readProduct");
const updateProductAPI = require("./product/updateProduct");
const deleteProductAPI = require("./product/daleteProduct");
//project
const createProjectAPI = require("./project/createProject");
const deleteProjectAPI = require("./project/deleteProject");
const readProjectAPI = require("./project/readProject");
const updateProjectAPI = require("./project/updateProject");

const router = express.Router();

router.use(signupAPI);
router.use(signinAPI);

//product
router.use(createProductAPI);
router.use(updateProductAPI);
router.use(readProductAPI);
router.use(deleteProductAPI);

//product
router.use(createProjectAPI);
router.use(updateProjectAPI);
router.use(readProjectAPI);
router.use(deleteProjectAPI);

module.exports = router;
