module.exports = function (sequelize, dataTypes) {
    let alias = "ImageProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image1: { type: dataTypes.STRING },
        image2: { type: dataTypes.STRING },
        image3: { type: dataTypes.STRING },
    };
    let config = {
        tableName: "image_products",
        timestamps: false,
    };
    let ImageProducts = sequelize.define(alias, cols, config);

    ImageProducts.associate = function (models) {
        ImageProducts.hasOne(models.Products, {
            as: "products",
            foreignKey: "id",
        });
    };
    return ImageProducts;
};
