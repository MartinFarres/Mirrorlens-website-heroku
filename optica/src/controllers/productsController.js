const productService = require("../services/products");
const controller = {
    collections: function (req, res) {
        res.render("collections", {
            products: productService.products,
            pageTitle: "Productos - Mirrorlens",
        });
    },

    detail: (req, res) => {
        const id = req.params.id;
        const product = productService.findOne(id);
        if (product) {
            res.render("detail", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products: productService.products,
            });
        } else {
            res.render("not-found");
        }
    },

    create: function (req, res) {
        res.render("createProd", {
            pageTitle: "Crea tu producto",
        });
    },
    edit: function (req, res) {
        res.render("editProd");
    },

    update: (req, res, files) => {},

    store: function (req, res) {},
};

module.exports = controller;
