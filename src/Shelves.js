import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Shelves = ({ books, onBookUpdate }) => {
  const shelves = [
    { name: "Currently Reading", status: "currentlyReading" },
    { name: "Want to Read", status: "wantToRead" },
    { name: "Read", status: "read" },
  ];
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.status}
              shelf={shelf}
              onBookUpdate={onBookUpdate}
              books={books}
            />
          ))}
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

Shelves.propTypes = {
  books: propTypes.array.isRequired,
  onBookUpdate: propTypes.func.isRequired,
};

export default Shelves;
