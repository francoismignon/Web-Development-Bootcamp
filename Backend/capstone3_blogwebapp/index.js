import express from "express"

const app = express();
const port = 3000;
var articles = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/edit", (req, res)=>{
    var index = req.body.index;
    res.render("index.ejs", {index: index, articles: articles});
});

app.post("/submit", (req, res)=>{
    articles.push(req.body.article);
    res.render("index.ejs", {articles : articles});
});

app.listen(port, ()=>{
    console.log(`Le serveur à demarrer sur le port ${port}`);
});