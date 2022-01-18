// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");
// const { config } = require("../../.sequelizerc");
// const models = require("../models")

// module.exports = (sequelize, dataTypes) => {
//     let alias = "Transaction";
//     let cols = {
//         Id: {
//             type: dataTypes.INTEGER,
//             primarykey: true,
//             autoIncrement: true,
//             allowNull: false,
//         },
//         User_Id: {
//             type: dataTypes.INTEGER,
//             allowNull: false
//         },
//         Product_Id: {
//             type: dataTypes.INTEGER,
//             allowNull: false
//         },
//         Amount: {
//             type: dataTypes.INTEGER,
//             allowNull: false
//         },
//         Total_Price: {
//             type: dataTypes.INTEGER,
//             allowNull: false
//         }
//     };
//     let config = {
//         tableName: "transactions",
//         timestamps: false,
//     };

//     const Transactions = sequelize.define(alias, cols, config);

//     Transactions.associate = (models)=>{
//         UserShop.belongsTo(models.Product,{
//             as: "productShop",
//             foreignKey: "Product_Id"
//         }),
//         UserShop.belongsTo(models.User,{
//             as: "userShop",
//             foreignKey: "User_Id"
//         })
//     }


//     return Transactions;
// };