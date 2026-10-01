import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    authorName: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    }
})

export const bookModel =  mongoose.model('books', bookSchema)