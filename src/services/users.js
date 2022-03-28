const fs = require("fs");
const path = require("path");
const db = require("../database/models/");
const bcryptjs = require("bcryptjs");

module.exports = {
    async getAll() {
        return await db.Users.findAll({
            include: [
                {
                    association: "adress",
                },
            ],
        });
    },

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
        let userAdress = await db.Adress.create({
            street: body.street,
            country: body.country,
        });
        await db.Users.create({
            name: body.name,
            email: body.email,
            password: bcryptjs.hashSync(body.password, 10),
            repassword: bcryptjs.hashSync(body.repassword, 10),
            photo_user: file ? "/images/userAvatars/" + file.filename : "/images/userAvatars/user-default.png",
            adress_id: userAdress.id,
        });
    },
};
