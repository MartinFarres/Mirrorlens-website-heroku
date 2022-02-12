const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcryptjs = require("bcryptjs");
function saveUsers() {
    const save = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, save, "utf-8");
}

module.exports = {
    /*findAll: function () {
        return users;
    },*/

    /*findByPk: function (id) {},*/
    users,
    saveUsers,

    findById(id) {
        const user = users.find((user) => {
            return id == user.id;
        });
        return user;
    },
    findByField(field, text) {
        const user = users.find((user) => {
            return user[field] == text;
        });
        return user;
    },

    createUser(body, file) {
        let usuario = {
            id: Date.now(),
            ...body,
            password: bcryptjs.hashSync(body.password, 10),
            repassword: bcryptjs.hashSync(body.repassword, 10),
        };
        if (file) {
            usuario.img = file.filename;
        }

        users.push(usuario);

        saveUsers();
    },
};
