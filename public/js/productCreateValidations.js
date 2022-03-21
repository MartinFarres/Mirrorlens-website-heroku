window.onload = () => {
    let form = document.querySelector("form.create-form");
    let checkboxes = document.querySelectorAll(".inputColorBoxes input");

    for (let checkbox of checkboxes) {
        checkbox.addEventListener("click", (e) => {
            if (checkbox.value == 0) {
                checkbox.value = 1;
                console.log(checkbox.value);
            } else {
                checkbox.value = 0;
                console.log(checkbox.value);
            }
        });
    }
    
    form.addEventListener("submit", function (e) {
        function isChecked(object) {
            let value = true;
            for (input in object) {
                if (object[input].checked == true) {
                    value = false;
                }
            }
            return value;
        }
        let errors = {};

        let inputName = document.querySelector('input[name="name"]');
        if (inputName.value == "") {
            errors["name"] = "El campo de nombre tiene que estar completo";
        } else if (inputName.value.length < 5) {
            errors["name"] =
                "El campo de nombre tiene que tener 5 al menos caracteres!";
        }

        let inputImage = document.querySelector('input[name="image"]');
        if (inputImage.value == "") {
            errors["image"] = "Debes subir una imagen";
        }

        let inputType = document.querySelectorAll('input[name="type"]');
        if (isChecked(inputType)) {
            errors["type"] = "Debes elegir un tipo de lente";
        }

        let inputGender = document.querySelectorAll('input[name="gender"]');
        if (isChecked(inputGender)) {
            errors["gender"] = "Debes elegir un genero de lente";
        }

        let inputBrand = document.querySelector('input[name="brand"]');
        if (inputBrand.value == "") {
            errors["brand"] = "La Marca no puede estar vacia";
        }

        let inputColorBorder = document.querySelectorAll(
            'input[class="colorBorderCheckboxes"]'
        );
        if (isChecked(inputColorBorder)) {
            errors["colorBorderCheckboxes"] =
                "Debes elegir al menos un Color de borde";
        }

        let inputColorGlasses = document.querySelectorAll(
            'input[class="colorGlassesCheckboxes"]'
        );
        if (isChecked(inputColorGlasses)) {
            errors["colorGlassesCheckboxes"] =
                "Debes elegir al menos un Color de lente";
        }

        let inputModel = document.querySelector('input[name="model"]');
        if (inputModel.value == "") {
            errors["model"] = "El campo de modelo tiene que estar completo ";
        }

        let inputPrice = document.querySelector('input[name="price"]');
        if (inputPrice.value == "") {
            errors["priceVal"] =
                "El campo del precio tiene que estar completo ";
        }

        let inputDescription = document.querySelector(
            'input[name="description"]'
        );
        if (inputDescription.value == "") {
            errors["description"] =
                "El campo descripcion tiene que estar completo ";
        }

        if (Object.entries(errors).length !== 0) {
            e.preventDefault();
            for (nameError in errors) {
                let liErrors = document.querySelector(
                    "div." + nameError + " li"
                );
                let divErrors = document.querySelector("div." + nameError);
                if (liErrors !== null) {
                    liErrors.remove();
                }

                divErrors.innerHTML +=
                    '<li class="front-error">' +
                    "<strong>" +
                    errors[nameError] +
                    "</strong>" +
                    "</li>";
            }
        }
    });
};
