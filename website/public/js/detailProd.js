window.onload = () => {
    console.log("hola");
    let imgSmall1 = document.querySelector("#img-small1");
    let imgSmall2 = document.querySelector("#img-small2");
    let imgSmall3 = document.querySelector("#img-small3");
    let img1 = document.querySelector("#img1");
    let img2 = document.querySelector("#img2");
    let img3 = document.querySelector("#img3");

    imgSmall1.addEventListener("click", () => {
        console.log("1");
        img1.classList.replace("d-none", "img-selected");
        img2.classList.replace("img-selected", "d-none");
        img3.classList.replace("img-selected", "d-none");
    });
    imgSmall2.addEventListener("click", () => {
        console.log("2");
        img1.classList.replace("img-selected", "d-none");
        img2.classList.replace("d-none", "img-selected");
        img3.classList.replace("img-selected", "d-none");
    });
    imgSmall3.addEventListener("click", () => {
        console.log("3");
        img1.classList.replace("img-selected", "d-none");
        img2.classList.replace("img-selected", "d-none");
        img3.classList.replace("d-none", "img-selected");
    });
};
