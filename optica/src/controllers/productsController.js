const db = require("../database/models");
const products = require("../database/models/products");
const upload = require("../middlewares/multerMiddleware");
const productService = require("../services/products");
const controller = {
    collections: function (req, res) {
        db.Products.findAll({
            include: [{ association: "ImageProducts" }],
        }).then((products) => {
            res.render("collections", { products: products });
        });
    },
    detail: (req, res) => {
        const promise = db.Products.findByPk(req.params.id, {
            include: [{ association: "ImageProducts" }],
        });
        promise.then((product) => {
            res.render("detail", {
                product: product,
                products1: productService.limitAndOffset(4, 0),
                products2: productService.limitAndOffset(4, 4),
            });
        });
    },

    create: function (req, res) {
        db.ProductBorderColor.findAll({
            include: [{ association: "products" }],
        }).then((productBorderColor) => {
            res.render("createProd", {
                pageTitle: "Crea tu producto",
                productBorderColor: productBorderColor,
                columnNames: productService
                    .tableNames(db.ProductBorderColor)
                    .filter((columnName) => {
                        return columnName != "id";
                    }),
            });
        });
    },
    store: async function (req, res) {
        let borderColor = await db.ProductBorderColor.create({
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

        let imageProduct = await db.ImageProducts.create({
            image_1: req.files[0].filename,
        });

        await db.Products.create({
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            borderColor_Id: borderColor.id,
            brand: req.body.brand,
            gender: req.body.gender,
            images_id: imageProduct.id,
        });

        res.redirect("/");
    },

    edit: function (req, res) {
        const id = req.params.id;
        const product = productService.findOne(id);
        res.render("editProd", {
            product: product,
            pageTitle: "Editando: " + product.name,
        });
    },

    update: (req, res, files) => {
        const id = req.params.id;
        productService.updateOne(id, req.body, req.files);

        res.redirect(`/collections/${id}`);
    },

    destroy: function (req, res) {
        const id = req.params.id;
        productService.deleteOne(id);
        res.redirect("/collections/");
    },
};

module.exports = controller;
