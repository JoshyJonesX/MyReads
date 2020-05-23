import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { getAll, update } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((books) =>
      this.setState({
        books,
      })
    );
  }

  updateBooks = (bookToUpdate, shelf) => {
    update(bookToUpdate, shelf).then(() => {
      const foundBooks = this.state.books.filter(
        (book) => book.id !== bookToUpdate.id
      );
      this.setState({
        books: [...foundBooks, { ...bookToUpdate, shelf }],
      });
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => <Shelves books={books} onBookUpdate={this.updateBooks} />}
        />
        <Route path='/search' render={() => <SearchBooks  onBookUpdate={this.updateBooks} books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
