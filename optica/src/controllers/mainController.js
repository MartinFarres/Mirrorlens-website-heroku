const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
    home: function (req, res) {
        res.render("home", { products });
    },
    login: function (req, res) {
        res.render("login", {
            pageTitle: "Ingresa",
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
        for (let i = 0; i < products.length; i++) {
            if (
                products[i].name.toLowerCase().includes(busqueda.toLowerCase())
            ) {
                search.push(products[i]);
            }
        }
        res.render("results", { search: search });
    },

    cRegister: function (req, res) {},
};

module.exports = controller;
