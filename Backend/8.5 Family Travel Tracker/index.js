import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "angusmg",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

// let users = [
//   { id: 1, name: "Angela", color: "teal" },
//   { id: 2, name: "Jack", color: "powderblue" },
// ];

async function CheckVisited() {
  const result = await db.query("SELECT country_code FROM countries AS c INNER JOIN users_countries AS uc ON c.id = uc.countries_id WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function CheckUsers(){
  const result = await db.query("SELECT id, name, color FROM users ORDER BY id ASC");
  return result.rows; //renvoye un tableau pair cle valeur
}

async function getCurrentUser(){
  const result = await db.query("SELECT * FROM users");
  return result.rows.find(user => user.id == currentUserId);
}

app.get("/", async (req, res) => {
  const users = await CheckUsers();
  console.log(users);
  const currentUser = await getCurrentUser();
  console.log(currentUser.color);
  const countries = await CheckVisited();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color
  });
});

app.post("/add", async (req, res) => {
  const users = await CheckUsers();
  try {
    const response = await db.query("SELECT id FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [req.body.country.toLowerCase()]);
    const countryId = response.rows[0].id;
    console.log(countryId);
    try {
      await db.query("INSERT INTO users_countries (user_id, countries_id) VALUES ($1, $2)", [currentUserId, countryId]);
    } catch (error) {
      const countries = await CheckVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        users: users,
        color: users[currentUserId - 1].color,
        error: "Vous avez déja visité ce pays !!"
      });
    }
    res.redirect("/");
  } catch (error) {
    console.log(error);
    const countries = await CheckVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: users[currentUserId - 1].color,
      error: "Ce pays n'existe pas, réesaye"
    });
  }

});

app.post("/user", async (req, res) => {
  if (req.body.add) {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name = req.body.name;
  const color = req.body.color;
  const id = await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING id",[name, color]);
  currentUserId = id.rows[0].id;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
