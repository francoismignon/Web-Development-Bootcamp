import express from "express";
// import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
  res.send(`<h1>Votre nom de groupe est:</h1><h2>${req.body.street}${req.body.pet}😘</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
