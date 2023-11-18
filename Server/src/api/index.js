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

const deleteEmployeeAPI = require("./employee/deleteEmployee");
const createEmployeeAPI = require("./employee/createEmployee");
const readEmployeeAPI = require("./employee/readEmployee");
const updateEmployeeAPI = require("./employee/updateEmployee");

const deleteCustomerAPI = require("./customer/deleteCustomer");
const createCustomerAPI = require("./customer/createCustomer");
const readCustomerAPI = require("./customer/readCustomer");
const updateCustomerAPI = require("./customer/updateCustomer");

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
//کارمندان
router.use(createEmployeeAPI);
router.use(updateEmployeeAPI);
router.use(readEmployeeAPI);
router.use(deleteEmployeeAPI);

router.use(createCustomerAPI);
router.use(updateCustomerAPI);
router.use(readCustomerAPI);
router.use(deleteCustomerAPI);



module.exports = router;
