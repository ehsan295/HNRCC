const express = require("express");
const signupAPI = require("./signup");
const signinAPI = require("./signin");
//product
const createProductAPI = require("./product/createProduct");
const readProductAPI = require("./product/readProduct");
const updateProductAPI = require("./product/updateProduct");
const deleteProductAPI = require("./product/deleteProduct");
//project
const createProjectAPI = require("./project/createProject");
const deleteProjectAPI = require("./project/deleteProject");
const readProjectAPI = require("./project/readProject");
const updateProjectAPI = require("./project/updateProject");

const deleteEmployeeAPI = require("./employee/deleteEmployee");
const createEmployeeAPI = require("./employee/createEmployee");
const readEmployeeAPI = require("./employee/readEmployess");
const updateEmployeeAPI = require("./employee/updateEmpolyee");

const deleteCustomerAPI = require("./customer/deleteCustomer");
const createCustomerAPI = require("./customer/createCustomer");
const readCustomerAPI = require("./customer/readCustomer");
const updateCustomerAPI = require("./customer/updateCustomer");

const deleteStockAPI = require("./stock/deleteStock");
const createStockAPI = require("./stock/createStock");
const readStockAPI = require("./stock/readStock");
const updateStockAPI = require("./stock/updateStock");

const deleteVehicleAPI = require("./vehicle/deleteVehicle");
const createVehicleAPI = require("./vehicle/createVehicle");
const readVehicleAPI = require("./vehicle/readVehicle");
const updateVehicleAPI = require("./vehicle/updateVehicle");

const deleteUserAPI = require("./user/deleteUser");
const createUserAPI = require("./user/createUser");
const readUserAPI = require("./user/readUser");
const updateUserAPI = require("./user/updateUser");

const deleteTransferAPI = require("./transfer/deleteTransfer");
const createTransferAPI = require("./transfer/createTransfer");
const readTransferAPI = require("./transfer/readTransfer");
const updateTransferAPI = require("./transfer/updateTransfer");

const deleteRoomParticipantAPI = require("./roomparticipant/deleteroomParticipant");
const createRoomParticipantAPI = require("./roomparticipant/createRoomParticipant");
const readRoomParticipantAPI = require("./roomparticipant/readRoomParticipant");
const updateRoomParticipantAPI = require("./roomparticipant/updateRoomParticipant");

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

router.use(createStockAPI);
router.use(updateStockAPI);
router.use(readStockAPI);
router.use(deleteStockAPI);

router.use(createVehicleAPI);
router.use(updateVehicleAPI);
router.use(readVehicleAPI);
router.use(deleteVehicleAPI);

router.use(createUserAPI);
router.use(updateUserAPI);
router.use(readUserAPI);
router.use(deleteUserAPI);

router.use(createTransferAPI);
router.use(updateTransferAPI);
router.use(readTransferAPI);
router.use(deleteTransferAPI);

router.use(createRoomParticipantAPI);
router.use(updateRoomParticipantAPI);
router.use(readRoomParticipantAPI);
router.use(deleteRoomParticipantAPI);






module.exports = router;
