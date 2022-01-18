module.exports = (sequelize,dataTypes) => {
        let alias = "User";
        let cols= {
            Id:{ 
                type: dataTypes.INTEGER,
                primarykey: true,
                autoIncrement: true,
                allowNull: false
            },
            Name:{
                type: dataTypes.STRING(100),
                allowNull: false
            },
            Email:{
                type: dataTypes.STRING(100),
                allowNull: false
            },
            Password:{
                type: dataTypes.STRING(100),
                allowNull: false
            },
            Country:{
                type: dataTypes.STRING,
                allowNull: false
            },
            Street:{
                type: dataTypes.STRING,
                allowNull: false
            },
            PhotoUser:{
                type: dataTypes.STRING,
                allowNull: true
            }
        };
        let config = {
            tableName: "users",
            timestamps: false, 
        }

        const Users = sequelize.define(alias, cols, config);

        Users.associate = (models)=>{
            Users.hasMany(models.UserShop,{
                as: "userShop",
                foreignKey: "User_Id"
            })
        }

        return Users;
}