const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
const { config } = require("../../.sequelizerc");
const models = require("../models")

module.exports = (sequelize, dataTypes) => {
    let alias = "UserShop";
    let cols = {
        Id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true,
            allowNull: false,
        },
        User_Id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Product_Id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Amount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Total_Price: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "usershop",
        timestamps: false,
    };

    const UserShop = sequelize.define(alias, cols, config);

    UserShop.associate = (models)=>{
        UserShop.belongsTo(models.Product,{
            as: "productShop",
            foreignKey: "Product_Id"
        }),
        UserShop.belongsTo(models.User,{
            as: "userShop",
            foreignKey: "User_Id"
        })
    }


    return UserShop;
};