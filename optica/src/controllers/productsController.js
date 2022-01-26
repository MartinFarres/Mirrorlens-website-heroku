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
        res.render("createProd", {
            pageTitle: "Crea tu producto",
        });
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

    store: function (req, res) {
        productService.createOne(req.body, req.files);
        res.redirect("/collections/");

        /*/ if (req.file) {
            producto.img = req.file.filename;
            productoId = mainController.create(producto);
            res.redirect("/collections/" + productoId);
        }/*/
    },
    destroy: function (req, res) {
        const id = req.params.id;
        productService.deleteOne(id);
        res.redirect("/collections/");
    },
};

module.exports = controller;
