const productService = require("../services/products");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const controller = {
    collections: async function (req, res) {
        res.render("collections", {
            products: await productService.getAll(),
            pageTitle: "Productos - Mirrorlens",
        });
    },

    detail: async (req, res) => {
        const id = req.params.id;

        const product = await productService.findOne(id);
        if (product) {
            res.render("detail", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products: await productService.getAll(),
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
    edit: async function (req, res) {
        const id = req.params.id;
        const product = await productService.findOne(id);
        res.render("editProd", {
            product: product,
            pageTitle: "Editando: " + product.name,
        });
    },

    update: async (req, res, files) => {
        const id = req.params.id;
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            const product = await productService.findOne(id);
            return res.render("editProd", {
                pageTitle: "Editando: " + product.name,
                errors: resultValidation.mapped(),
                product: product,
                oldData: req.body,
            });
        }

        await productService.updateOne(id, req.body, req.files);

        res.redirect(`/collections/${id}`);
    },

    store: async function (req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("createProd", {
                pageTitle: "Crea tu producto",
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        await productService.createOne(req.body, req.files);
        res.redirect("/collections/");
    },
    destroy: function (req, res) {
        const id = req.params.id;
        productService.deleteOne(id);
        res.redirect("/collections/");
    },
};

module.exports = controller;
