module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: { type: dataTypes.STRING },
        price: { type: dataTypes.DECIMAL },
        description: { type: dataTypes.TEXT },
        type: { type: dataTypes.STRING },
        borderColor_Id: { type: dataTypes.STRING },
        // glassColor: { type: dataTypes.STRING },
        brand: { type: dataTypes.STRING },
        gender: { type: dataTypes.STRING },
        // model: { type: dataTypes.STRING },
        images_id: { type: dataTypes.STRING },
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };
    let Products = sequelize.define(alias, cols, config);

    // Products.associate = function (models) {
    //     Products.hasMany(models.ImageProducts, {
    //         as: "products",
    //         foreignKey: "image_id",
    //     });

    //     Products.belongsToMany(models.Users, {
    //         as: "users",
    //         through: "user_shop",
    //         foreignKey: "product_id",
    //         otherKey: "user_id",
    //         timestamps: false,
    //     });
    // };
    return Products;
};
