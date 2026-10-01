import express from 'express';
import { bookModel } from '../model/book.schema.js';

export const addBook = async (req, res) => {
    try {
        const {title, authorName, ISBN, category, publicationYear } = req.body;
        if (!title || !authorName || !ISBN || !category || !publicationYear) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const book = await bookModel.create({ title, authorName, ISBN, category, publicationYear });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}