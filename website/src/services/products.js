const fs = require("fs");
const path = require("path");
const db = require("../database/models/");

module.exports = {
    getAll: async () => {
        return await db.Products.findAll({
            include: [
                {
                    association: "imageProducts",
                },
                {
                    association: "ProductBorderColor",
                },
            ],
        });
    },

    getProductBorderColor: async () => {
        return await db.ProductBorderColor.findAll({
            include: [{ association: "products" }],
        });
    },

    async createOne(body, files) {
        let imageProduct = await db.ImageProducts.create({
            ...(files[0] && {
                image1: "/images/productsimage/" + files[0].filename,
            }),
            ...(files[1] && {
                image2: "/images/productsimage/" + files[1].filename,
            }),
            ...(files[2] && {
                image3: "/images/productsimage/" + files[2].filename,
            }),
        });
        let borderColor = await db.ProductBorderColor.create({
            red: this.reqProductBorderColors(body.red),
            blue: this.reqProductBorderColors(body.blue),
            black: this.reqProductBorderColors(body.black),
            white: this.reqProductBorderColors(body.white),
            purple: this.reqProductBorderColors(body.purple),
            grey: this.reqProductBorderColors(body.grey),
            green: this.reqProductBorderColors(body.green),
            orange: this.reqProductBorderColors(body.orange),
            yellow: this.reqProductBorderColors(body.yellow),
            pink: this.reqProductBorderColors(body.pink),
            brown: this.reqProductBorderColors(body.brown),
            transparent: this.reqProductBorderColors(body.transparent),
        });
        await db.Products.create({
            name: body.product_name,
            price: body.price,
            description: body.description,
            type: body.type,
            borderColor_Id: borderColor.id,
            glass_color: body.glass_color,
            brand: body.brand,
            gender: body.gender,
            model: body.model,
            image_id: imageProduct.id,
        });
    },

    async findOne(id) {
        return await db.Products.findByPk(id, {
            include: [
                {
                    association: "imageProducts",
                },
                {
                    association: "ProductBorderColor",
                },
            ],
        });
    },

    async updateOne(id, body, files) {
        try {
            await db.ImageProducts.update(
                {
                    ...(files[0] && {
                        image1: "/images/productsimage/" + files[0].filename,
                    }),
                    ...(files[1] && {
                        image2: "/images/productsimage/" + files[1].filename,
                    }),
                    ...(files[2] && {
                        image3: "/images/productsimage/" + files[2].filename,
                    }),
                },
                {
                    where: { id: id },
                },
                {
                    multi: true,
                }
            );
            await db.Products.update(
                {
                    ...body,
                },
                {
                    where: { id: id },
                },
                {
                    multi: true,
                }
            );
            await db.ProductBorderColor.update({
                red: this.reqProductBorderColors(body.red),
                blue: this.reqProductBorderColors(body.blue),
                black: this.reqProductBorderColors(body.black),
                white: this.reqProductBorderColors(body.white),
                purple: this.reqProductBorderColors(body.purple),
                grey: this.reqProductBorderColors(body.grey),
                green: this.reqProductBorderColors(body.green),
                orange: this.reqProductBorderColors(body.orange),
                yellow: this.reqProductBorderColors(body.yellow),
                pink: this.reqProductBorderColors(body.pink),
                brown: this.reqProductBorderColors(body.brown),
                transparent: this.reqProductBorderColors(body.transparent),
            });
        } catch (err) {
            console.log(err);
        }
    },

    async deleteOne(id) {
        await db.ProductBorderColor.destroy({ where: { id: id }, force: true });
        await db.Products.destroy({ where: { id: id }, force: true });
        await db.ImageProducts.destroy({ where: { id: id }, force: true });
        
    },
    tableNames: (modelName) => {
        let keys = [];
        for (let key in modelName.rawAttributes) {
            keys.push(key);
        }
        return keys;
    },
    reqProductBorderColors: (name) => {
        if (name == null) {
            return 0;
        } else {
            return name;
        }
    },
};
