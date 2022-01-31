const db = require("../database/models");
const products = require("../database/models/products");
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
            include: [{association: "ImageProducts"}]
        });
        promise.then((product) => {
            res.render("detail", {
                product: product,
                products1: productService.limitAndOffset(4,0),
                products2: productService.limitAndOffset(4,4)
            });
        });
    },

    create: function (req, res) {
        db.Products.findAll({
            include: [{association: "productBorderColor"}]
        })
        .then((products)=>{
            res.render("createProd", {
                pageTitle: "Crea tu producto",
                products
            });
        })
        
    },
    store: function (req, res) {
        db.Products.create({
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            borderColor_Id: req.body.borderColor_Id,
            brand: req.body.brand,
            gender: req.body.gender,
            images_id: req.body.images_id,
        })
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
