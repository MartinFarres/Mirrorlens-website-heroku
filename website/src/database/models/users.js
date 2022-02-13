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
        repassword: { type: dataTypes.STRING },
        direction: { type: dataTypes.STRING },
        photo_user: { type: dataTypes.STRING },
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };
    let Users = sequelize.define(alias, cols, config);

    //   Users.associate = function (models) {
    //      Users.hasMany(models.photoUser, {
    //          as: "users",
    //          foreignKey: "photo_user",
    //      });
    //  };
    return Users;
};
