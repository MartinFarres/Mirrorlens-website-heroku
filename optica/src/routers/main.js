const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/cart", mainController.cart);

router.get("/login", mainController.login);
// router.post("/login", mainController.loginUser);

router.get("/register", mainController.register);
router.post("/register", mainController.createUser);

router.get("/collections", mainController.shop);
router.get("/collections/:id", mainController.detalle);
router.get("/search", mainController.search);
router.get("/create", mainController.create);
router.get("/modify", mainController.modify);

module.exports = router;
