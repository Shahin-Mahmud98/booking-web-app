const mongoose = require('mongoose');

// Define the schema
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        trending: {
            type: Boolean,
            required: true,
        },
        coverImage: {
            type: String, // Corrected type definition
            required: true,
        },
        oldPrice: {
            type: Number,
            required: true,
        },
        newPrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt`
    }
);

// Create the model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
