module.exports = function (sequelize, dataTypes) {
    let alias = "ProductGlassColor";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        red: { type: dataTypes.SMALLINT },
        blue: { type: dataTypes.SMALLINT },
        black: { type: dataTypes.SMALLINT },
        white: { type: dataTypes.SMALLINT },
        purple: { type: dataTypes.SMALLINT },
        grey: { type: dataTypes.SMALLINT },
        green: { type: dataTypes.SMALLINT },
        orange: { type: dataTypes.SMALLINT },
        yellow: { type: dataTypes.SMALLINT },
        pink: { type: dataTypes.SMALLINT },
        brown: { type: dataTypes.SMALLINT },
        
    };
    let config = {
        tableName: "glass_color",
        timestamps: false,
    };
    let ProductGlassColor = sequelize.define(alias, cols, config);

    ProductGlassColor.associate = function (models) {
        ProductGlassColor.hasMany(models.Products, {
            as: "products",
            foreignKey: "id",
        });
    };
    return ProductGlassColor;
};
