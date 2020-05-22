import React from "react";
import propTypes from "prop-types";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <li>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </li>
  );
};

Books.propTypes = {
  books: propTypes.array.isRequired,
};

export default Books;
