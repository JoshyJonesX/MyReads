import React from "react";
import propTypes from "prop-types";
import DropDown from "./DropDown";

const Book = ({book}) => {
	const { imageLinks, title, authors, shelf } = book
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 174,
            backgroundImage: `url(${imageLinks.thumbnail})`,
          }}
        ></div>
        <DropDown selected={shelf || ''} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired
};

export default Book;
