const fs = require("fs");
const path = require("path");
const db = require("../database/models/");
const bcryptjs = require("bcryptjs");

module.exports = {
    async findById(id) {
        const user = await db.Users.findByPk(id);
        return user;
    },
    async findByField(text) {
        try {
            const user = await db.Users.findOne({
                where: { email: text },
            });
            return user;
        } catch (err) {
            console.log(err);
        }
    },

    async createUser(body, file) {
        await db.Users.create({
            ...body,
            password: bcryptjs.hashSync(body.password, 10),
            repassword: bcryptjs.hashSync(body.repassword, 10),
            ...(file && {
                photo_user: "/images/productsimage/" + file.filename,
            }),
        });
    },
};
