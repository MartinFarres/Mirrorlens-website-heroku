const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
const { config } = require("../../.sequelizerc");
const models = require("../models")

module.exports = (sequelize, dataTypes) => {
    let alias = "ImagesOfProduct";
    let cols = {
        Id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Image_1: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        Image_2: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        Image_3: {
            type: dataTypes.STRING(200),
            allowNull: true
        }
    };
    let config = {
        tableName: "productImages",
        timestamps: false,
    };

    const ProductsImages = sequelize.define(alias, cols, config);

    ProductsImages.associate = (models)=>{
        ProductsImages.belongsTo(models.Product,{
            as: "images",
            foreignKey: "Images_id"
        })
    }


    return ProductsImages;
};
