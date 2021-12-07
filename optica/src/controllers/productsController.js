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
};

module.exports = controller;
