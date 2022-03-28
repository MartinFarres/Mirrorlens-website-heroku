const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que escribir tu nombre y apellido"),
    body("email")
        .notEmpty()
        .withMessage("Tienes que escribir tu email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido"),
    body("country").notEmpty().withMessage("Tienes que escribir tu Pais"),
    body("street").notEmpty().withMessage("Tienes que escribir tu Direccion"),
    body("password")
        .notEmpty()
        .withMessage("Tienes que escribir una contrañesa"),
    body("repassword")
        .notEmpty()
        .withMessage("Tienes que escribir una contraseña"),
    body("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExt = [".jpg", ".png", "jpeg"];

        if (file) {
            let fileExt = path.extname(file.originalname);
            if (!acceptedExt.includes(fileExt)) {
                throw new Error(
                    `Las extensiones permitidas son ${acceptedExt.join(",")}`
                );
            }
        }

        return true;
    }),
];
