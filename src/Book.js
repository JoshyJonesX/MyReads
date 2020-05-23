import React from "react";
import propTypes from "prop-types";
import DropDown from "./DropDown";
import { update } from "./BooksAPI";

const Book = ({ book }) => {
  const { imageLinks, title, authors, shelf } = book;
  const updateBook = (newShelf) => {
    update(book, newShelf);
  };
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 174,
            backgroundImage: `url(${imageLinks.thumbnail})`,
          }}
        ></div>
        <DropDown onBookUpdate={updateBook} selected={shelf || ""} />
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
};

export default Book;
