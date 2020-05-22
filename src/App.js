import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { getAll } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
  };

  componentDidMount() {
    getAll().then((books) =>
      this.setState({
        books,
      })
    );
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks books={this.state.books}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelves books={this.state.books} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
