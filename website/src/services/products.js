const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const { validationResult } = require("express-validator");
const { unlink } = require("fs/promises");
function saveProducts() {
    const save = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, save, "utf-8");
}

module.exports = {
    products,
    saveProducts,

    findById: async (id)=>{
        await db.Products.findOne({
            where: {
                id: id
            },
            include: [{association: "ImageProducts"}]
        })
    },

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

    getAll: () => {
        return db.Products.findAll({
            include: [{ association: "ImageProducts" }],
        });
    },

    limitAndOffset: (limit, offset) => {
        return db.Products.findAll({
            include: [
                { association: "ImageProducts", limit: limit, offset: offset },
            ],
        });
    },
    tableNames: (modelName) => {
        let keys = [];
        for (let key in modelName.rawAttributes) {
            keys.push(key);
        }
        return keys;
    },

    reqProductBorderColors: (name) => {
        if (name == null) {
            return 0;
        } else {
            return name;
        }
    },

    update: async (req, res, files) => {
        if (files[0]) {
            await db.ImageProducts.update(
                {
                    image1: "/images/productsimage/" + files[0].filename,
                },
                {
                    where: { id: id },
                },
                {
                    multi: true,
                }
            );
        }
        if (files[1]) {
            await db.ImageProducts.update(
                {
                    image2: "/images/productsimage/" + files[1].filename,
                },
                {
                    where: { id: id },
                },
                {
                    multi: true,
                }
            );
        }
        if (files[2]) {
            await db.ImageProducts.update(
                {
                    image3: "/images/productsimage/" + files[2].filename,
                },
                {
                    where: { id: id },
                },
                {
                    multi: true,
                }
            );
        }
        await db.Products.update(
            {
                ...body,
            },
            {
                where: { id: id },
            },
            {
                multi: true,
            }
        );
        await db.Products.update(
            {
                ...body,
            },
            {
                where: { id: id },
            }
        );
        await db.borderColor.update({
            red: productService.reqProductBorderColors(req.body.red),
            blue: productService.reqProductBorderColors(req.body.blue),
            black: productService.reqProductBorderColors(req.body.black),
            white: productService.reqProductBorderColors(req.body.white),
            purple: productService.reqProductBorderColors(req.body.purple),
            grey: productService.reqProductBorderColors(req.body.grey),
            green: productService.reqProductBorderColors(req.body.green),
            orange: productService.reqProductBorderColors(req.body.orange),
            yellow: productService.reqProductBorderColors(req.body.yellow),
            pink: productService.reqProductBorderColors(req.body.pink),
            brown: productService.reqProductBorderColors(req.body.brown),
            transparent: productService.reqProductBorderColors(
                req.body.transparent
            ),
        });
    },
};
