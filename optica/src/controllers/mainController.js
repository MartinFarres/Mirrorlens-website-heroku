const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");
const userService = require("../services/users");
const productService = require("../services/products");
const bcryptjs = require("bcryptjs");
const controller = {
    home: function (req, res) {
        res.render("home", { products: productService.products });
    },
    login: function (req, res) {
        res.render("login", {
            pageTitle: "Ingresa",
        });
    },
    loginProcess: function (req, res) {
        let userToLogin = userService.findByField("email", req.body.email);
        console.log(userToLogin);
        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
            );
            if (passwordOk) {
                delete userToLogin.password;
                /*delete userToLogin.repassword;*/
                req.session.userLogged = userToLogin;
                if (req.body.remember) {
                    res.cookie("userEmail", req.body.email, {
                        maxAge: 1000 * 60 * 2,
                    });
                }

                return res.redirect("/profile/");
            }
            return res.render("login", {
                pageTitle: "Ingresa",
                errors: {
                    email: {
                        msg: "Las credenciales son incorrectas",
                    },
                },
            });
        }

        return res.render("login", {
            pageTitle: "Ingresa",
            errors: {
                email: {
                    msg: "Este email no está registrado",
                },
            },
        });
    },
    profile: function (req, res) {
        res.render("profile", {
            pageTitle: "Bienvenido",
            user: req.session.userLogged,
        });
    },
    register: function (req, res) {
        res.render("register", {
            pageTitle: "Crea tu cuenta",
        });
    },

    cart: function (req, res) {
        res.render("cart", {
            pageTitle: "Carrito",
        });
    },

    search: function (req, res) {
        let busqueda = req.query.search;
        let search = [];
        for (let i = 0; i < productService.products.length; i++) {
            if (
                productService.products[i].name
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
            ) {
                search.push(productService.products[i]);
            }
        }
        res.render("results", { search: search });
    },

    cRegister: function (req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userInD = userService.findByField("email", req.body.email);

        if (userInD) {
            return res.render("register", {
                errors: {
                    email: {
                        msg: "Este email ya está registrado",
                    },
                },
                oldData: req.body,
            });
        }
        userService.createUser(req.body, req.file);
        return res.render("thanksForR");
    },
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    },
};

module.exports = controller;
