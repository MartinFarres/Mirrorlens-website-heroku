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
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/views/prod.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/prod.html"));
});
