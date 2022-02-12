module.exports = function (sequelize, dataTypes) {
    let alias = "UserShop";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "userShop",
        timestamps: false,
    };
    let UserShop = sequelize.define(alias, cols, config);

    UserShop.associate = function (models) {
        UserShop.belongsTo(models.Products, {
            as: "products",
            foreignKey: "product_id",
        });
        UserShop.belongsTo(models.Users,{
            as: "users",
            foreignKey: "user_id"
        })
    };
    return UserShop;
};
