const ProductModel = require("../models/product");
const ProjectModel = require("../models/project");
const sequelize = require("../database/index");

ProjectModel.hasMany(ProductModel, {
  foreignKey: "projectId",
});
ProductModel.belongsTo(ProjectModel, {
  foreignKey: "projectId",
});
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
