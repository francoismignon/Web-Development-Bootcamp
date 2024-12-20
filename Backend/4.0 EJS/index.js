import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Middleware
app.use(computeNumberOfDay);

//Fonction middleware
function computeNumberOfDay(req, res, next){
    // const date = new Date();
    req.numOfDay = new Date().getDay();
    next();
};

//Route (endpoints)
app.get("/", (req, res)=>{
    res.render("index.ejs", {day: req.numOfDay});
});

app.listen(port, (req, res)=>{
    console.log(`Le serveur a démarré sur les port : ${port}.`);
});