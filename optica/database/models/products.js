const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
const { config } = require("../../.sequelizerc");

module.exports = (sequelize,DataTypes) => {
        let alias = "Productos";
        let cols= {
            id:{ 
                dataTypes.INTEGER,
                primarykey: true,
                autoIncrement: true,
                } ,
            name:{
                type:dataTypes.STRING
            },
            price:{
                type:dataTypes.INTEGER
            },
            description:{
                type:dataTypes.STRING
            },
            type:{
                type:dataTypes.STRING
            },
            borderColor: {
                type:dataTypes.STRING
            },
            glassColor:{
                type:dataTypes.STRING
            },
            brand:{
                type:dataTypes.STRING
            },
            gender:{
                type:dataTypes.INTEGER
            },
            model:{
                type:dataTypes.STRING
            },
            images_id:{
                type:dataTypes.INTEGER
            },
        
        };
        let config = {
            tableName: "products",
            timestamps: false, 
        }

        const Products = sequelize.define(alias, cols, config);

        return Products;
}