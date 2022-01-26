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
        street: { type: dataTypes.STRING },
        photoUser: { type: dataTypes.STRING },
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };
    let Users = sequelize.define(alias, cols, config);

    // Users.associate = function (models) {
    //     Users.hasMany(models.photoUser, {
    //         as: "users",
    //         foreignKey: "photoUser",
    //     });
    // };
    return Users;
};
