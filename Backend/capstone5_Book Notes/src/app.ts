import express from 'express'
import dotenv from 'dotenv'
import bookRoutes from './routers/bookRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT?parseInt(process.env.PORT):3000;
const test = '1';

// Servir les fichiers statiques depuis "public"
app.use(express.static("public"));
// Activer l'encodage des requêtes POST
app.use(express.urlencoded({extended: true}));
//Defini EJS comme moteur de vue
app.set('view engine', 'ejs');

app.use('/books', bookRoutes);

app.listen(PORT, ()=>{
    console.log(`[server] server running at: http://localhost:${PORT}/books`);
});