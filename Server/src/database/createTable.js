const sequelize = require("../database/index");
const ProductModel = require("../models/product");
const ProjectModel = require("../models/project");

const VehicleModel = require ("../models/vehicle");
const EmployeeModel = require("../models/empolyee");
// const TransferModel = require("../models/transfer");
// const OrderModel = require ("../models/order");
const StockModel = require("../models/stock")
const PurchaseModel = require("../models/purches")
// const OrderdetailModel = require ("../models/orderdetail")
// const PaymentModel =require("../models/payment")
// const CustomerModel = require("../models/customer")
// const OrderdetailProductModel = require("../models/orderdetailProduct")
// const ExpenseCategoryModel = require("../models/expenseCatagore")
// const ExpenseModel= require("../models/expenseCatagore")

//product and project
ProjectModel.hasMany(ProductModel, {
  foreignKey: "projectId",
});
ProductModel.belongsTo(ProjectModel, {
  foreignKey: "projectId",
});

// vehicle and project

ProjectModel.hasMany(VehicleModel, {
  foreignKey: "projectId",
});
VehicleModel.belongsTo(ProjectModel,{
  foreignKey: "projectId",
})
// // vehicle and Employee
EmployeeModel.hasOne(VehicleModel,{
  foreignKey: "employeId",
})
VehicleModel.belongsTo(EmployeeModel,{
  foreignKey: "employeId",
})

//transfer and vehicle
// VehicleModel.hasMany(TransferModel,{
//   foreignKey: "vehicleId",
// })
// TransferModel.belongsTo(VehicleModel,{
//   foreignKey: "vehicleId",
// })
// // order and transfer
// OrderModel.hasMany(TransferModel, {
//   foreignKey: 'orderId',
// });

// TransferModel.belongsTo(OrderModel, {
//   foreignKey: 'orderId',
// });
// // stock and project
ProjectModel.hasMany(StockModel, {
  foreignKey: 'projectId',
});

StockModel.belongsTo(ProjectModel, {
  foreignKey: 'projectId',
});

// // Set up the association between PurchaseModel and ProjectModel
PurchaseModel.belongsTo(ProjectModel, {
  foreignKey: 'projectId',
});

ProjectModel.hasMany(PurchaseModel, {
  foreignKey: 'projectId',
});

//purches and employee
PurchaseModel.belongsTo(EmployeeModel, {
  foreignKey: 'employeId',
});

EmployeeModel.hasMany(PurchaseModel, {
  foreignKey: 'employeId',
});

//product and project
ProductModel.belongsTo(ProjectModel, {
  foreignKey: "projectId",
});

ProjectModel.hasMany(ProductModel, {
  foreignKey: "projectId",
});

// // // payment and order
// // OrderModel.belongsToMany(PaymentModel, {
// //   through: 'PaymentOrder',
// //   foreignKey: 'orderId',
// // });

// // //  PaymentModel and CustomerModel

// CustomerModel.hasMany(PaymentModel, {
//   // foreignKey: 'customerId',
// });
// PaymentModel.belongsTo(CustomerModel, {
//   foreignKey: "customerId",
// });

// //orderdetail and order
// OrderdetailModel.belongsTo(OrderModel, {
//   foreignKey: "orderId",
// });

// OrderdetailModel.belongsTo(ProductModel, {
//   foreignKey: "productId",
// });
// //orderdetail and customer
// OrderdetailModel.belongsTo(CustomerModel, {
//   foreignKey: "customerId",
// });
// CustomerModel.hasMany(OrderdetailModel, {
//   foreignKey: "customerId",
// });
// // orderdetail and product
// OrderdetailModel.belongsToMany(ProductModel, {
//   through: OrderdetailProductModel,
//   foreignKey: "orderdetailId",
// });

// ProductModel.belongsToMany(OrderdetailModel, {
//   through: OrderdetailProductModel,
//   foreignKey: "productId",
// });

// // expense and project and empolyee
// ProjectModel.hasMany(ExpenseModel, {
//   foreignKey: "projectId",
// });
// ExpenseModel.belongsTo(ProjectModel, {
//   foreignKey: "projectId",
// });

// ExpenseCategoryModel.hasMany(ExpenseModel, {
//   foreignKey: "expenseCategoryid",
// });
// ExpenseModel.belongsTo(ExpenseCategoryModel, {
//   foreignKey: "expenseCategoryid",
// });

// ExpenseModel.belongsTo(EmployeeModel, {
//   foreignKey: "employeeId",
// });
// EmployeeModel.hasMany(ExpenseModel, {
//   foreignKey: "employeeId",
// });
// empolyee and project
EmployeeModel.belongsTo(ProjectModel, {
  foreignKey: "projectId",
});

ProjectModel.hasMany(EmployeeModel, {
  foreignKey: "projectId",
});

// //customer project and order
// CustomerModel.belongsTo(ProjectModel, {
//   foreignKey: 'projectId',
// });

// ProjectModel.hasMany(CustomerModel, {
//   foreignKey: 'projectId',
// });

// CustomerModel.hasMany(OrderModel, {
//   foreignKey: 'customerId',
// });

// OrderModel.belongsTo(CustomerModel, {
//   foreignKey: 'customerId',
// });

const createTable = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("table cereated seuccessfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    await sequelize.close();
  }
};

module.exports = createTable;
