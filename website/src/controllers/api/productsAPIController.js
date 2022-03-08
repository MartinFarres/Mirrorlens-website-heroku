const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const Products = db.Products;
const Users = db.Users;

async function brandsAndCount() {
    let brandsArray = [];
    let counts = {};
    let respuesta = [];
    let products = await db.Products.findAll();
    for (product in products) {
        brandsArray.push(products[product].brand);
    }
    brandsArray.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });

    Object.keys(counts).map(function (key, index) {
        respuesta.push({
            brand: key,
            count: counts[key],
        });
    });
    return respuesta;
}

function countByType(products) {
    let sunglasses = 0;
    let eyeglasses = 0;
    products.map((product) => {
        return product.type == "Sunglasses"
            ? (sunglasses += 1)
            : (eyeglasses += 1);
    });
    return (count = {
        sunglasses,
        eyeglasses,
    });
}

function countByGender(products) {
    let femenino = 0;
    let masculino = 0;
    let unisex = 0;
    products.map((product) => {
        return product.gender == "F"
            ? (femenino += 1)
            : product.gender == "M"
            ? (masculino += 1)
            : (unisex += 1);
    });
    return (count = {
        femenino,
        masculino,
        unisex,
    });
}

function getProductsIf() {}

const productsAPIController = {
    list: async (req, res) => {
        let brand = req.query.brand;
        console.log(brand)
        let products;
        if (brand) {
            products = await db.Products.findAll({
                where: {
                    brand: brand,
                },
                include: [
                    "imageProducts",
                    "ProductBorderColor",
                    "ProductGlassColor",
                ],
            });
        } else {
            products = await db.Products.findAll({
                include: [
                    "imageProducts",
                    "ProductBorderColor",
                    "ProductGlassColor",
                ],
            });
        }

        let respuesta = {
            meta: {
                status: 200,
                total: products.length,
                totalByType: countByType(products),
                totalByGender: countByGender(products),
                url: "api/products",
            },
            data: products,
        };
        res.json(respuesta);
    },

    pagination: async (req, res) => {
        const page = req.query.page || 1;
        const limit = 6;
        const offset = page != 1 ? (page - 1) * limit : 0;
        let brand = req.query.brand;
        let products;
        if (brand != undefined) {
            products = await db.Products.findAll({
                where: {
                    brand: brand,
                },
                limit: limit,
                offset: offset,
                include: [
                    "imageProducts",
                    "ProductBorderColor",
                    "ProductGlassColor",
                ],
            });
        } else {
            products = await db.Products.findAll({
                limit: limit,
                offset: offset,
                include: [
                    "imageProducts",
                    "ProductBorderColor",
                    "ProductGlassColor",
                ],
            });
        }

        const prev =
            page == 1 ? "first page" : "/api/products?page=" + (page - 1);
        const next =
            page == products.length / limit
                ? "last page"
                : "api/products?page=" + (page + 1);

        let respuesta = {
            meta: {
                status: 200,
                total: products.length,
                totalByType: countByType(products),
                totalByGender: countByGender(products),
                url: "api/products",
                prev: prev,
                next: next,
            },
            data: products,
        };
        res.json(respuesta);
    },

    detail: async (req, res) => {
        let product = await db.Products.findByPk(req.params.id, {
            include: [
                "imageProducts",
                "ProductBorderColor",
                "ProductGlassColor",
            ],
        });

        let respuesta = {
            meta: {
                status: 200,
                url: "/api/products/detail/:id",
            },
            data: product,
        };
        res.json(respuesta);
    },
    listProductImages: (req, res) => {
        db.ImageProducts.findAll().then((products) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products/productImages",
                },
                data: products,
            };
            res.json(respuesta);
        });
    },

    brandsInDb: async (req, res) => {
        let respuesta = {
            meta: {
                status: 200,
                url: "/api/products/brandsInDb",
            },
            data: await brandsAndCount(),
        };
        res.json(respuesta);
    },
};

module.exports = productsAPIController;
