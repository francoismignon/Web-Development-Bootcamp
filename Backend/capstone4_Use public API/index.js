import express, { response } from "express";
import axios from "axios";
import { name } from "ejs";

const app = express();
const port = 3000;
const config = {
    headers: { Authorization: "Bearer aSERTSxjnglG2BlHc--0" }
}
const BASE_URL = "https://the-one-api.dev/v2";
const arrayOfCharacters = []

//définir le dossier des fichiers statique
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        // const response = await axios.get(`${BASE_URL}/character`, config);
        const params = new URLSearchParams();
        params.append("name", "Gandalf");
        params.append("name", "Samwise Gamgee");
        params.append("name", "Legolas");
        params.append("name", "Gimli");
        params.append("name", "Boromir");
        params.append("name", "Gollum");
        params.append("name", "Sauron");
        params.append("name", "Saruman");
        params.append("name", "Galadriel");
        params.append("name", "Elrond");
        params.append("name", "Éowyn");
        params.append("name", "Éomer");
        params.append("name", "Théoden");
        params.append("name", "Arwen");
        params.append("name", "Treebeard");
        params.append("name", "Bilbo Baggins");

        const response = await axios.get(`${BASE_URL}/character`, {params, ...config});
        response.data.docs.forEach(character => {
            if (character.dialog !== "")
                arrayOfCharacters.push(character);
        });
        res.render("index.ejs", {
            characters: arrayOfCharacters
        });
    } catch (error) {
        console.log(error);
    }
});

app.post("/", async (req, res) => {
    try {
        const result = await axios.get(`${BASE_URL}/character/${req.body.character}`, config);
        const response = await axios.get(`${BASE_URL}/character/${req.body.character}/quote`, config);
        res.render("index.ejs", {
            characters: arrayOfCharacters,
            quotes: response.data.docs,
            name: result.data.docs[0].name
        });
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(port, () => {
    console.log(`Le serveur a démarré sur le port: ${port}`);
});