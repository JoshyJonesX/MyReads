import React, { Component } from "react";
import propTypes from "prop-types";
import Books from "./Books";
import { search } from "./BooksAPI";
import SearchBar from "./SearchBar";

class SearchBooks extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onBookUpdate: propTypes.func.isRequired,
  };
  state = {
    foundBooks: [],
    error: false,
  };

  searchBook = (query) => {
    search(query).then((found) => {
      if (found["books"]["error"]) {
        this.setState({
          foundBooks: [],
          error: true,
        });
      } else {
        const booksInShelf = this.props.books.filter(({ id: id1 }) =>
          found.books.some(({ id: id2 }) => id2 === id1)
        );
        const booksNotInShelf = found.books.filter(
          ({ id: id1 }) => !this.props.books.some(({ id: id2 }) => id2 === id1)
        );

        const foundBooks = [...booksInShelf, ...booksNotInShelf];
        this.setState({
          foundBooks,
          error: false,
        });
      }
    });
  };

  render() {
    const { error, foundBooks } = this.state;
    return (
      <div className='search-books'>
        <SearchBar onSearchChange={this.searchBook} />
        {error && (
          <div className='search-books-results'>
            <h1 className='books-grid'>Invalid query</h1>
          </div>
        )}
        {foundBooks && (
          <div className='search-books-results'>
            <ol className='books-grid'>
              <Books books={this.state.foundBooks} onBookUpdate={this.props.onBookUpdate} />
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBooks;
