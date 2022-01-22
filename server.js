const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use("/assets", express.static("public"));
const homeController = require("./controllers/homeController");

app.get("/", homeController);

app.listen(2000, console.log(2000));
