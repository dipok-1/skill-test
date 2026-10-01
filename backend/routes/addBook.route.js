import express from 'express';
import { addBook } from '../controllers/addBook.controller';
const router = express.Router();


router.post('/', addBook)