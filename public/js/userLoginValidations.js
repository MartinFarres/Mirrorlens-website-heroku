window.onload = () => {
    let form = document.querySelector(".login");
    form.addEventListener("submit", function (e) {
        let errors = {};

        let inputEmail = document.querySelector('input[name="email"]');

        if (inputEmail.value == "") {
            errors["email"] = "El campo de email tiene que estar completo ";
        }

        let inputPassword = document.querySelector('input[name="password"]');

        if (inputPassword.value == "") {
            errors["password"] = "La contraseña no puede estar vacia";
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
