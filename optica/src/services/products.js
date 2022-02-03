const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

function saveProducts() {
    const save = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, save, "utf-8");
}

module.exports = {
    products,
    saveProducts,

    createOne(body, files) {
        let producto = {
            id: Date.now(),
            ...body,
        };
        if (files) {
            producto.img = files[0].filename;
            producto.img2 = files[1].filename;
            producto.img3 = files[2].filename;
        }

        products.push(producto);

        saveProducts();
    },

    findOne(id) {
        const product = products.find((product) => {
            return id == product.id;
        });
        return product;
    },

    updateOne(id, body, files) {
        const indice = products.findIndex((prod) => {
            return prod.id == id;
        });
        const productoEncontrado = {
            id: products[indice].id,
            ...body,

            if(files) {
                productoEncontrado.img = files[0].filename;
                productoEncontrado.img2 = files[1].filename;
                productoEncontrado.img3 = files[2].filename;
            },
        };
        products[indice] = productoEncontrado;

        saveProducts();
    },

    deleteOne(id) {
        const indice = products.findIndex((prod) => {
            return prod.id == id;
        });
        products.splice(indice, 1);
        saveProducts();
    },

    getAll: ()=>{
        return db.Products.findAll({
            include: [{ association: "ImageProducts" }],
        })
    },

    limitAndOffset: (limit, offset)=>{
        return db.Products.findAll({
            include: [{association: "ImageProducts",
            limit: limit,
            offset: offset}],
        })
    },
    tableNames: (modelName)=>{
        let keys = []
        for( let key in modelName.rawAttributes ){
            keys.push(key)
        }
        return keys
    },

    reqProductBorderColors: (name)=>{
        if(name == null){
            return 0
        }else{
            return name
        }
    }
};
