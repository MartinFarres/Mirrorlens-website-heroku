window.onload = () => {
    let form = document.querySelector(".register");
    form.addEventListener("submit", function (e) {
        let errors = {};

        let inputName = document.querySelector('input[name="name"]');

        if (inputName.value == "") {
            errors["name"] = "El campo de nombre tiene que estar completo";
        } else if (inputName.value.length < 5) {
            errors["name"] =
                "El campo de nombre tiene que tener 5 al menos caracteres!";
        }

        let inputEmail = document.querySelector('input[name="email"]');

        if (inputEmail.value == "") {
            errors["email"] = "El campo de email tiene que estar completo ";
        }

        let inputCountry = document.querySelector('input[name="country"]');

        if (inputCountry.value == "") {
            errors["country"] = "El campo de pais tiene que estar completo";
        }

        let inputStreet = document.querySelector('input[name="street"]');

        if (inputStreet.value == "") {
            errors["street"] = "El campo de domicilio tiene que estar completo";
        }

        let inputPassword = document.querySelector('input[name="password"]');

        if (inputPassword.value == "") {
            errors["password"] = "La contraseña no puede estar vacia";
        }

        let inputRepassword = document.querySelector(
            'input[name="repassword"]'
        );

        if (inputRepassword.value == "") {
            errors["repassword"] = "Las contraseñas no coinciden";
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
