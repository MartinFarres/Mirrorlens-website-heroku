const path = require("path");
const products = [
    {
        id: 1001,
        name: "OAKLEY HOLBROOK 01",
        desc: "10% OFF",
        price: "$12.530",
        img: "/images/OAKLEY_9102_01_800x.jpg",
        img2: "/images/OAKLEY_9102_01_2_800x.jpg",
        img3: "/images/Medidas-Final_44b4698e-f740-45d5-b0ec-725ce4d9c426_800x.jpg",
        descr: "Color: Negro, Color de lente: Gris, Material: Plastico, Medidas: 55-18-137, Tipo: Unisex / Aro Completo, Peso: 27 gramos",
    },
    {
        id: 1002,
        name: "RAY-BAN ROUND 901",
        desc: "15% OFF",
        price: "$18.860",
        img: "/images/RAY_BAN_2447_52_901_800x.jpg",
        img2: "/images/RAY_BAN_2447_52_901_2_160x.jpg",
        img3: "/images/RAY_BAN_2447_52_901_3_1800x1132.jpg",
        descr: "Color: Negro, Color de lente: G15, Material: Plastico, Medidas: 49-21-145, Tipo: Unisex / Aro Completo, Peso: 30 gramos",
    },
    {
        id: 1003,
        name: "VULK YESTER MBLK REVO ROSE",
        desc: "10% OFF",
        price: "$7.310",
        img: "/images/VULKYESTERMBLKREVOROSE_800x.jpg",
        img2: "/images/VULKYESTERMBLKREVOROSE_2_1800x1132.jpg",
        img3: "/images/VULKYESTERMBLKREVOROSE_3_1800x1132.jpg",
        descr: "Color: Negro Mate, Color de lente: Espejado Rosa, Material: TR90, Medidas: 53-19-140, Tipo: Unisex / Aro Completo, Peso: 28 gramos",
    },
    {
        id: 1004,
        name: "NYOL 1904 03 SPOL",
        desc: "15% OFF",
        price: "$5.500",
        img: "/images/NYOL190403S_800x.jpg",
        img2: "/images/NYOL190403S_2_1800x1132.jpg",
        img3: "/images/NYOL190403S_3_1800x1132.jpg",
        descr: "Color: Negro Mate, Color de lente: Gris Polarizadas, Material: Metal, Medidas: 50-17-145, Tipo: Unisex / Aro Completo, Peso: 28 gramos",
    },
    {
        id: 1005,
        name: "REEF 224 02",
        desc: "10% OFF",
        price: "$9.110",
        img: "/images/REEF22402_800x.jpg",
        img2: "/images/REEF22402_2_1800x1132.jpg",
        img3: "/images/REEF22402_3_1800x1132.jpg",
        descr: "Color: Gris Mate, Color de lente: Gris Polarizadas, Material: TR90 y Metal, Medidas: 54-17-134, Tipo: Unisex / Aro Completo, Peso: 28 gramos",
    },
    {
        id: 1006,
        name: "VULK GEES SDEMI B10 POL",
        desc: "20% OFF",
        price: "$6.990",
        img: "/images/VULKGEESSDEMI-B10POL_800x.jpg",
        img2: "/images/VULKGEESSDEMI-B10POL_2_1800x1132.jpg",
        img3: "/images/VULKGEESSDEMI-B10POL_3_1800x1132.jpg",
        descr: "Color: Tortoise, Color de lente: Marron, Material: TR90, Medidas: 58-16-125, Tipo: Unisex / Aro Completo, Peso: 28 gramos",
    },
    {
        id: 1007,
        name: "RALPH 5160 510 13",
        desc: "20% OFF",
        price: "$12.650",
        img: "/images/0RA5160__510_13_000A_1413x889.jpg",
        img2: "/images/0RA5160__510_13_030A_1560x981.jpg",
        img3: "/images/0RA5160__510_13_090A_1433x902.jpg",
        descr: "Color: Tortoise, Color de lente: Marron, Material: Plastico, Medidas: 57-17-135, Tipo: Mujer / Aro Completo, Peso: 30 gramos",
    },
    {
        id: 1008,
        name: "RUSTY MANIC SBLK R.BLUE",
        desc: "20% OFF",
        price: "$6.630",
        img: "/images/RUSTY_MANIC_SBLK_REVO_BLUE_1800x1132.jpg",
        img2: "/images/RUSTY_MANIC_SBLK_REVO_BLUE_2_1800x1132.jpg",
        img3: "/images/Medidas-Final_44b4698e-f740-45d5-b0ec-725ce4d9c426_800x.jpg",
        descr: "Color: Negro, Color de lente: Espejado Azul, Material: Plastico, Medidas: 50-14-140, Tipo: Unisex / Aro Completo, Peso: 28 gramos",
    },
];
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
};

module.exports = mainController;
