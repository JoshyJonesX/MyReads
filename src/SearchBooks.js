import React, { Component } from "react";
import propTypes from "prop-types";
import Books from "./Books";
import { search } from "./BooksAPI";
import SearchBar from "./SearchBar";

class SearchBooks extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
  };
  state = {
    foundBooks: [],
  };

  searchBook = (query) => {
    search(query).then((found) => {
      if (found) {
        const booksInShelf = this.props.books.filter(({ id: id1 }) =>
          found.some(({ id: id2 }) => id2 === id1)
        );

        const booksNotInShelf = found.filter(
          ({ id: id1 }) => !this.props.books.some(({ id: id2 }) => id2 === id1)
        );

        const foundBooks = [...booksInShelf, ...booksNotInShelf];
        this.setState({
          foundBooks,
        });
      }
    });
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar onSearchChange={this.searchBook} />
        {this.state.foundBooks ? (
          <div className="search-books-results">
            <ol className="books-grid">
              <Books books={this.state.foundBooks} />
            </ol>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SearchBooks;
