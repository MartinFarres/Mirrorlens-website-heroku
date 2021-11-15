const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/products", mainController.products);
router.get("/shop", mainController.shop);

module.exports = router;
