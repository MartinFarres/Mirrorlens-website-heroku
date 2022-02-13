const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que escribir el nombre del lente"),
    body("type").notEmpty().withMessage("Tienes que escribir el tipo de lente"),
    body("model")
        .notEmpty()
        .withMessage("Tienes que escribir el modelo del lente"),
    body("brand")
        .notEmpty()
        .withMessage("Tienes que escribir la marca del lente"),
    body("border_color")
        .notEmpty()
        .withMessage("Tienes que escribir el color del borde del lente"),
    body("gender").notEmpty().withMessage("Tienes que escribir el género"),
    body("glass_color")
        .notEmpty()
        .withMessage("Tienes que escribir el color del lente"),
    body("price").notEmpty().withMessage("Tienes que escribir un precio"),
    body("description")
        .notEmpty()
        .withMessage("Tienes que escribir una descripción"),
    body("img").custom((value, { req }) => {
        let file = req.files[0];
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
    }),
];
