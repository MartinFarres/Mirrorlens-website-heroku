const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mainController = require("../controllers/mainController");
const { body } = require("express-validator");

const validator = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que escribir tu nombre y apellido"),
    body("user").notEmpty().withMessage("Tienes que escribir un usuario"),
    body("mail")
        .notEmpty()
        .withMessage("Tienes que escribir tu mail")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido"),
    body("direction")
        .notEmpty()
        .withMessage("Tienes que escribir tu dirección"),
    body("pass").notEmpty().withMessage("Tienes que escribir una contrañesa"),
    body("repass").notEmpty().withMessage("Tienes que escribir una contraseña"),
    /* body("img").custom((value, { req }) => {
        let file = req.file;
        let acceptedExt = [".jpg", ".png"];
        if (!file) {
            throw new Error("Tienes que subir una imagen");
        } else {
            let fileExt = path.extname(file.originalname);
            if (!acceptedExt.includes(fileExt)) {
                throw new Error(
                    `Las extensiones permitidas son ${acceptedExt.join(",")}`
                );
            }
        }

        return true;
    }),*/
];

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

router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.post("/register", validator, mainController.cRegister);
router.get("/search", mainController.search);

module.exports = router;
