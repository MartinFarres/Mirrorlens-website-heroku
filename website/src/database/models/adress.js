module.exports = function (sequelize, dataTypes) {
    let alias = "Adress";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        street: { type: dataTypes.STRING },
        country: { type: dataTypes.STRING },
        
    };
    let config = {
        tableName: "user_adress",
        timestamps: false,
    };
    let Adress = sequelize.define(alias, cols, config);

    Adress.associate = function (models) {
        Adress.hasMany(models.Users, {
            as: "users",
            foreignKey: "id",
        });
    };
    return Adress;
};
