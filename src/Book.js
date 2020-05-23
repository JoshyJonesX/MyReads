import React from "react";
import propTypes from "prop-types";
import DropDown from "./DropDown";

const Book = ({ book, onBookUpdate }) => {
  const { imageLinks, title, authors, shelf } = book;
  const updateBook = (newShelf) => {
    onBookUpdate(book, newShelf);
  };
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          {imageLinks && (
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 174,
                backgroundImage: `url(${imageLinks.thumbnail})`,
              }}
            ></div>
          )}
          <DropDown onBookUpdate={updateBook} selected={shelf || ""} />
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
  onBookUpdate: propTypes.func.isRequired,
};

export default Book;
