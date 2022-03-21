const express = require("express");
const router = express.Router();
const usersAPIController = require("../../controllers/api/usersAPIController");

router.get("/", usersAPIController.list);

router.get("/users/:id", usersAPIController.detail);

router.get("/admins", usersAPIController.listAdmins);
module.exports = router;
