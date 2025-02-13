"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.set('views engine', 'ejs');
app.get("/", (req, res) => {
    res.send('<h1>Hello TypeScript</h1>');
});
app.listen(PORT, () => {
    console.log(`[server] server running at: http://localhost:${PORT}`);
});
