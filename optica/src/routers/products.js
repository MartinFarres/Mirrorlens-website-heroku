const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");
const multerMiddleware = require("../middlewares/multerMiddleware");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.collections);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/", multerMiddleware.array("img", 3), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productsController.edit);
router.put("/:id", multerMiddleware.array("img", 3), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);
module.exports = router;
