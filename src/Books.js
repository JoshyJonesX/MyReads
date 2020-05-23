import React from "react";
import propTypes from "prop-types";
import Book from "./Book";

const Books = ({ books, onBookUpdate }) => {
  return (
      books.map((book) => (
        <Book onBookUpdate={onBookUpdate} key={book.id} book={book} />
      ))
  );
};

Books.propTypes = {
  books: propTypes.array.isRequired,
  onBookUpdate: propTypes.func.isRequired,
};

export default Books;
