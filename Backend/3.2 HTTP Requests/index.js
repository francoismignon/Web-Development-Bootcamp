import express from "express"
var app = express();
var port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Salut tout le monde des douzes</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>+32498444392</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>François, developpeur web</h1>");
});

app.listen(port, ()=>{
    console.log(`Serveur demarrer sur le port ${port}.`);
});