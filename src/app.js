const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const mainRouter = require("./routers/main");
const productsRouter = require("./routers/products");
const apiRouterProducts = require("./routers/api/products");
const apiRouterUsers = require("./routers/api/users");
const methodOverride = require("method-override");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cookies = require("cookie-parser");
const cors = require("cors");
const publicPath = path.join(__dirname, "../public");

app.use(
    cors({
        origin: ["http://localhost:3000/"],
    })
);
app.use(
    session({
        secret: "Shh, a secret",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(process.env.PORT || 3001, () => console.log("Esto fue exitoso"));

app.use("/", mainRouter);
app.use("/collections", productsRouter);
app.use("/api/products", apiRouterProducts);
app.use("/api/users", apiRouterUsers);
app.use((req, res, next) => {
    res.status(404).render("not-found");
});

//localhost:3000/


