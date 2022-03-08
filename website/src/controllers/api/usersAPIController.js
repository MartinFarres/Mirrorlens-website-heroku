const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const Users = db.Users;

const usersAPIController = {
    list: async (req, res) => {
        let users = await db.Users.findAll({attributes: [ 'id','name', 'email']})
        users = users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                url: 'api/users/' + user.id,
            }
            
        });
        let respuesta = {
            meta: {
                status: 200,
                total: users.length,
                url: "api/users",
            },
            data: users,
        };
        res.json(respuesta);
    },
    pagination: async (req, res) => {
        const page = req.query.page || 1
        const limit = 10;
        const offset = page!=1 ? (page-1) * limit : 0
        let users = await db.Users.findAll({
            limit: limit,
            offset: offset,
            attributes: [ 'id','name', 'email']})
        users = users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                url: 'api/users/' + user.id,
            }
            
        });
        const prev = page == 1 ? 'first page' : '/api/users?page=' + (page - 1)
        const next = page == (products.length / limit) ? 'last page' : 'api/users?page=' + (page + 1)

        let respuesta = {
            meta: {
                status: 200,
                total: users.length,
                url: "api/users",
                prev: prev,
                next: next
            },
            data: users,
        };
        res.json(respuesta);
    },

    detail: async (req, res) => {
        let user = await db.Users.findByPk(req.params.id)
        delete user.password;
        delete user.admin;
        delete user.adress_id;
        let respuesta = {
            meta: {
                status: 200,
                url: "/api/users/:id",
            },
            data: user,
        };
        res.json(respuesta);
        
    },
    listAdmins: (req, res) => {
        db.Users.findAll({
            where: {
                admin: 1,
            },
        }).then((users) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: "/api/users/admins",
                },
                data: users,
            };
            res.json(respuesta);
        });
    },
};

module.exports = usersAPIController;
