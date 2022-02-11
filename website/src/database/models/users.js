module.exports = function (sequelize, dataTypes) {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: dataTypes.STRING },
        email: { type: dataTypes.STRING },
        password: { type: dataTypes.STRING },
        photoUser: { type: dataTypes.STRING },
        adress_id: { type: dataTypes.INTEGER }
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };
    let Users = sequelize.define(alias, cols, config);

    Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through: "user_shop",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false,
        });
        Users.belongsTo(models.Adress,{
            as: "adress",
            foreignKey: "adress_id"
        })
    };
    return Users;
};
