import express from 'express';
import { connectDb } from './config/db.js';
import { addBook } from './controllers/addBook.controller.js';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))
connectDb();
app.use(express.json())
app.use('/api/books', addBook)
app.listen(3000, () => {
    console.log("server started at port 3000")
})