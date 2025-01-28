// const { postABook, getAllBooks, getSingleBook, updateBookData, deleteBook } = require("./book.controller");
const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook,updateBookData,deleteBook } = require('./book.controller');


// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something
const router = express.Router();



// post a book
// router.post("/create-book", postABook)
router.post("/create-book",postABook)
// get all books
router.get("/",getAllBooks);
// single book endpoint
router.get("/:id",getSingleBook);
// update a book endpoint
router.put("/edit/:id", updateBookData);

// deleted book

router.delete("/:id",deleteBook);

module.exports = router;