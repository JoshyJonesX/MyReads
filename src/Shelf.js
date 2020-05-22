import React from "react";
import propTypes from "prop-types";
import Books from "./Books";

const Shelf = ({ shelf, books }) => {
  const selectedBooks = books.filter((book) => book.shelf === shelf.status);
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Books books={selectedBooks} />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  shelf: propTypes.object.isRequired,
  books: propTypes.array.isRequired,
};

export default Shelf;
