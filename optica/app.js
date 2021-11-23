const express = require("express");
const path = require("path");
const app = express();
const rutasMain = require("./routers/main");

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log("Esto fue exitoso"));

app.use("/", rutasMain);
app.use((req, res, next) => {
    res.status(404).render("not-found");
});

//localhost:3000/
