import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "world",
  password: "angusmg",
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function CheckVisited() {
  const response = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  response.rows.forEach(country => {
    countries.push(country.country_code);
  });
  return countries
}

app.get("/", async (req, res) => {
  const countries = await CheckVisited();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
  });
});

app.post("/add", async (req, res) => {
  try {
    const response = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [req.body.country.toLowerCase()]);
    const countryCode = response.rows[0].country_code;
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
    } catch (error) {
      const countries = await CheckVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
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
      error: "Ce pays n'existe pas, réesaye"
    });
  }

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
