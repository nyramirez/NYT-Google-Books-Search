const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: { type: Array, required: true },
    description:{ type: String, required: true },
    image: String,
    link: { type: String, required: true },
    title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;