const fs = require("fs");
const path = require("path");
const db = require("../database/models/");

module.exports = {
    async getAll() {
        return await db.Products.findAll({
            include: [
                {
                    association: "imageProducts",
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
        await db.Products.create({
            ...body,
            image_id: imageProduct.id,
        });
    },

    async findOne(id) {
        return await db.Products.findByPk(id, {
            include: [
                {
                    association: "imageProducts",
                },
            ],
        });
    },

    async updateOne(id, body, files) {
        try {
            let imageProduct = await db.ImageProducts.update(
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
        } catch (err) {
            console.log(err);
        }
    },

    async deleteOne(id) {
        return await db.ImageProducts.destroy({
            where: { id: id },
            force: true,
        });
    },
};
