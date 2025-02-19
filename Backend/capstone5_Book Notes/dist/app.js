"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bookRoutes_1 = __importDefault(require("./routers/bookRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const test = '1';
// Servir les fichiers statiques depuis "public"
app.use(express_1.default.static("public"));
// Activer l'encodage des requêtes POST
app.use(express_1.default.urlencoded({ extended: true }));
//Defini EJS comme moteur de vue
app.set('view engine', 'ejs');
app.use('/books', bookRoutes_1.default);
app.listen(PORT, () => {
    console.log(`[server] server running at: http://localhost:${PORT}/books`);
});
