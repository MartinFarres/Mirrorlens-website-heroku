const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productsController = require("../controllers/productsController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/productsImage"));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFileName =
            "user-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage: storage });

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.collections);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/", upload.array("img", 3), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productsController.edit);
router.put("/:id", upload.array("img", 3), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);
module.exports = router;
