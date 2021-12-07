const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

function saveProducts() {
    const save = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, save, "utf-8");
}

module.exports = {
    products,
    saveProducts,

    createOne(body, files) {},

    findOne(id) {
        const product = products.find((product) => {
            return id == product.id;
        });
        return product;
    },

    updateOne(id, body, files) {},
};
