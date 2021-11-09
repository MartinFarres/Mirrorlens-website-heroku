const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => console.log("Esto fue exitoso"));

//localhost:3000/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/views/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/views/home.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/views/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/views/products.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/products.html"));
});

app.get("/views/cart.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/cart.html"));
});
app.get("/views/shop.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/shop.html"));
});
