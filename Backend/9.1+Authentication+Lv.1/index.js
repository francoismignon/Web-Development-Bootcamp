import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "angusmg",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      username
    ]);
  
    if (checkResult.rows.length > 0) {
      res.send("l'utilisateur existe déja");
    } else {
      const response = await db.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
        [username, password]
      );
      console.log(response.rows[0]);
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.error(error);
    throw new Error("ceci est l'erreur");
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const result = await db.query(
    "SELECT * FROM users WHERE email = $1",
    [username]
  );
  console.log(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port : ${port}`);
});
