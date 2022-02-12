const res = require("express/lib/response");
const db = require("../database/models");
const products = require("../database/models/products");
const upload = require("../middlewares/multerMiddleware");
const productService = require("../services/products");
const userService = require("../services/users");
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
            });
        });
    },

    addToCart: async (req, res) => {
        console.log(req.session.userLogged)
        // let productId = req.params.id;
        // let user = req.session.userLogged;
        // await db.UserShop.create({
        //     user_id: user.id,
        //     product_id: productId,
        // });
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
            image_1: "/images/productsImage/" + req.files[0].filename,
            image2: req.files[1]
                ? "/images/productsimage/" + req.files[1].filename
                : null,
            image3: req.files[2]
                ? "/images/productsimage/" + req.files[2].filename
                : null,
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
        db.Products.findByPk(req.params.id, {
            include: [
                {
                    association: "ImageProducts",
                    association: "ProductBorderColor",
                },
            ],
        }).then((product) => {
            res.render("editProd", {
                product,
                columnNames: productService
                    .tableNames(db.ProductBorderColor)
                    .filter((columnName) => {
                        return columnName != "id";
                    }),
            });
        });
    },

    update: async (req, res) => {
        await productService.update(req, res, req.files);
        res.redirect("/collections/");
    },

    destroy: async function (req, res) {
        const id = req.params.id;
        await db.ImageProducts.destroy({ where: { id: id }, force: true });
        await db.ProductBorderColor.destroy({ where: { id: id }, force: true });
        res.redirect("/collections/");
    },
};

module.exports = controller;
