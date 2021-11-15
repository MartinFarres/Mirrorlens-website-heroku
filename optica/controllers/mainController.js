const path = require("path");
const mainController = {
    home: function (req, res) {
        res.render("home");
    },
    login: function (req, res) {
        res.render("login");
    },
    register: function (req, res) {
        res.render("register");
    },
    shop: function (req, res) {
        res.render("shop");
    },
    products: function (req, res) {
        res.render("products");
    },
    cart: function (req, res) {
        res.render("cart");
    },
};

module.exports = mainController;
