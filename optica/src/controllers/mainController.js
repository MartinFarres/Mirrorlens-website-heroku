const { json } = require("express");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
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
    shop: function (req, res) {
        res.render("shop", { products, pageTitle: "Productos - Mirrorlens" });
    },
    products: function (req, res) {
        res.render("products", { products });
    },
    cart: function (req, res) {
        res.render("cart", {
            pageTitle: "Carrito",
        });
    },
    detalle: (req, res) => {
        const id = req.params.id;
        const product = products.find((product) => {
            return id == product.id;
        });
        if (product) {
            res.render("products", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products,
            });
        } else {
            res.render("not-found");
        }
    },
    search: function (req, res) {
        let busqueda = req.query.search;
        let precioMax = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].name.includes(busqueda.toUpperCase())) {
                precioMax.push(products[i]);
            }
        }
        res.render("productsResult", { precioMax: precioMax });
    },
    create: function (req, res) {
        res.render("formularioCarga", {
            pageTitle: "Crea tu producto",
        });
    },
    modify: function (req, res) {
        res.render("formularioEditor", {
            pageTitle: "Modifica tu producto",
        });
    },
    createUser: function(req,res){
        let usuario = {
            nombre: req.body.nombre,
            user: req.body.user,
            mail: req.body.mail,
            birdate: req.body.birdate,
            direction: req.body.direction,
            pass: req.body.pass
        }

        // GUARDARLA
        
        let usuarios;
        let archivoUsuarios = fs.readFileSync("usuarios.json", {encoding: "utf-8"})
        if (archivoUsuarios == ""){
            usuarios = []
        }else{
            usuarios = JSON.parse(archivoUsuarios)
        }
        
        usuarios.push(usuario)

        usuariosJSON = JSON.stringify(usuarios)
        
        fs.writeFileSync("usuarios.json", usuariosJSON)

        res.redirect("/")
    }
};

module.exports = mainController;
