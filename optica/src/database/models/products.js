const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
const { config } = require("../../.sequelizerc");
const models = require("../models")

module.exports = (sequelize, dataTypes) => {
        let alias = "Product";
        let cols= {
            id:{ 
                type: dataTypes.INTEGER,
                primarykey: true,
                autoIncrement: true,
                allowNull: false
            } ,
            Product_Name:{
                type:dataTypes.STRING,
                allowNull: false
            },
            Price:{
                type:dataTypes.INTEGER.STRING,
                allowNull: false
            },
            Description:{
                type:dataTypes.STRING,
                allowNull: false
            },
            Type:{
                type:dataTypes.STRING,
                allowNull: false
            },
            BorderColor_Id: {
                type:dataTypes.INTEGER,
                allowNull: false
            },
            Brand:{
                type:dataTypes.STRING,
                allowNull: true
            },
            Gender:{
                type:dataTypes.INTEGER,
                allowNull: false
            },
            Images_id:{
                type:dataTypes.INTEGER,
                allowNull: false
            },
        
        };
        let config = {
            tableName: "products",
            timestamps: false, 
        }

        const Products = sequelize.define(alias, cols, config);

        Products.associate = (models)=>{
            Products.belongsTo(models.ColorsOfProduct,{
                as: "colors",
                foreignKey: "BorderColor_Id"
            }),
            Products.belongsTo(models.ImagesOfProduct,{
                as: "images",
                foreignKey: "Images_id"
            }),
            Products.hasMany(models.UserShop,{
                as: "productShop",
                foreignKey: "Product_Id"
            })
        }

        


        return Products;
}