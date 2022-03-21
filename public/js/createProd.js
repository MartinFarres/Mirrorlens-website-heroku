window.onload = () => {
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
};
