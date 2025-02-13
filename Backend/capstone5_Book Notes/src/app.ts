import express from 'express'
import dotenv from 'dotenv'
import bookRoutes from './routers/bookRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT?parseInt(process.env.PORT):3000;
const test = '1';
console.log(typeof(test));

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.set('views engine', 'ejs');

app.use('/', bookRoutes);

app.listen(PORT, ()=>{
    console.log(`[server] server running at: http://localhost:${PORT}`);
});