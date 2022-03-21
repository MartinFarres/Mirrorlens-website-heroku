const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

router.get("/", productsAPIController.list);


router.get("/pagination", productsAPIController.pagination);


router.get("/productImages", productsAPIController.listProductImages);

router.get("/detail/:id", productsAPIController.detail);

router.get("/brandsInDb", productsAPIController.brandsInDb)

// router.get('/products/brands', productsAPIController.listBrands);

module.exports = router;
