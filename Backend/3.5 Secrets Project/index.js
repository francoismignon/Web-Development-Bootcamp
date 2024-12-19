//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();
var port = 3000;
const password = "bonjour";
var passwordOK = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    if (req.body.password === password) {
        passwordOK = true;
    }
    next();
};

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(passwordOK === true){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.listen(port, (req, res) => {
    console.log("Le serveur a bien démarré sur le port : " + port)
});