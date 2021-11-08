const express = require("express")
const path = require("path")
const app = express()

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath));

app.listen(3000);

//localhost:3000/
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
})

app.get("/prod",(req,res) => {
    res.sendFile(path.join(__dirname, "views/prod.html"));
})


