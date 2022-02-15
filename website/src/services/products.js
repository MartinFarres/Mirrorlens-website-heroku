const fs = require("fs");
const path = require("path");
const db = require("../database/models/");

module.exports = {
    async getAll() {
        return await db.Products.findAll({
            include: [
                {
                    association: "imageProducts",
                    association: "ProductBorderColor",
                },
            ],
        });
    },

    async createOne(body, files) {
        let imageProduct = await db.ImageProducts.create({
            image1: "/images/productsimage/" + files[0].filename,
            image2: "/images/productsimage/" + files[1].filename,
            image3: "/images/productsimage/" + files[2].filename,
        });
        let borderColor = await db.ProductBorderColor.create({
            red: this.reqProductBorderColors(req.body.red),
            blue: this.reqProductBorderColors(req.body.blue),
            black: this.reqProductBorderColors(req.body.black),
            white: this.reqProductBorderColors(req.body.white),
            purple: this.reqProductBorderColors(req.body.purple),
            grey: this.reqProductBorderColors(req.body.grey),
            green: this.reqProductBorderColors(req.body.green),
            orange: this.reqProductBorderColors(req.body.orange),
            yellow: this.reqProductBorderColors(req.body.yellow),
            pink: this.reqProductBorderColors(req.body.pink),
            brown: this.reqProductBorderColors(req.body.brown),
            transparent: this.reqProductBorderColors(req.body.transparent),
        });
        await db.Products.create({
            name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            borderColor_Id: borderColor.id,
            glass_color: req.body.glass_color,
            brand: req.body.brand,
            gender: req.body.gender,
            model: req.body.model,
            image_id: imageProduct.id,
        });
    },

    async findOne(id) {
        return await db.Products.findByPk(id, {
            include: [
                {
                    association: "imageProducts",
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
            await db.borderColor.update({
                red: this.reqProductBorderColors(req.body.red),
                blue: this.reqProductBorderColors(req.body.blue),
                black: this.reqProductBorderColors(req.body.black),
                white: this.reqProductBorderColors(req.body.white),
                purple: this.reqProductBorderColors(req.body.purple),
                grey: this.reqProductBorderColors(req.body.grey),
                green: this.reqProductBorderColors(req.body.green),
                orange: this.reqProductBorderColors(req.body.orange),
                yellow: this.reqProductBorderColors(req.body.yellow),
                pink: this.reqProductBorderColors(req.body.pink),
                brown: this.reqProductBorderColors(req.body.brown),
                transparent: this.reqProductBorderColors(req.body.transparent),
            });
        } catch (err) {
            console.log(err);
        }
    },

    async deleteOne(id) {
        await db.ImageProducts.destroy({
            where: { id: id },
            force: true,
        });
        await db.ProductBorderColor.destroy({ where: { id: id }, force: true });
        
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
