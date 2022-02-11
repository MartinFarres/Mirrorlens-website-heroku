module.exports = function (sequelize, dataTypes) {
    let alias = "ProductBorderColor";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        red: { type: dataTypes.BOOLEAN },
        blue: { type: dataTypes.BOOLEAN },
        black: { type: dataTypes.BOOLEAN },
        white: { type: dataTypes.BOOLEAN },
        purple: { type: dataTypes.BOOLEAN },
        grey: { type: dataTypes.BOOLEAN },
        green: { type: dataTypes.BOOLEAN },
        orange: { type: dataTypes.BOOLEAN },
        yellow: { type: dataTypes.BOOLEAN },
        pink: { type: dataTypes.BOOLEAN },
        brown: { type: dataTypes.BOOLEAN },
        transparent: { type: dataTypes.BOOLEAN },
        
    };
    let config = {
        tableName: "productBorderColors",
        timestamps: false,
    };
    let ProductBorderColor = sequelize.define(alias, cols, config);

    ProductBorderColor.associate = function (models) {
        ProductBorderColor.hasMany(models.Products, {
            as: "products",
            foreignKey: "id",
        });
    };
    return ProductBorderColor;
};
