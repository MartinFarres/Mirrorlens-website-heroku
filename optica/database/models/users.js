module.exports = (sequelize,DataTypes) => {
        let alias = "Users";
        let cols= {
            id:{ 
                d
            }
        };
        let config = {
            tableName: "Users",
            timestamps: false, 
        }

        const Products = sequelize.define(alias, cols, config);

        return Products;
}