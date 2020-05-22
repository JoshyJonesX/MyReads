import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Shelves = ({ books }) => {
  const shelves = [
    { name: "Currently Reading", status: "currentlyReading" },
    { name: "Want to Read", status: "wantToRead" },
    { name: "Read", status: "read" },
  ];
  return shelves.map((shelf) => (
    <div key={shelf.status} className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf shelf={shelf} books={books} />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>
          Add a book
        </Link>
      </div>
    </div>
  ));
};

Shelves.propTypes = {
  books: propTypes.array.isRequired,
};

export default Shelves;
