import React from "react";
import propTypes from "prop-types";
import Shelf from "./Shelf";

const Shelves = ({ books }) => {
  const shelves = [
    { name: "Currently Reading", status: "currentlyReading" },
    { name: "Want to Read", status: "wantToRead" },
    { name: "Read", status: "read" },
  ];
  return shelves.map((shelf) => (
    <Shelf key={shelf.status} shelf={shelf} books={books} />
  ));
};

Shelves.propTypes = {
  books: propTypes.array.isRequired
};

export default Shelves;
