import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import { getAll } from "./BooksAPI";

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

  render() {
    const { books } = this.state;
    return (
      <div className='app'>
        <Route exact path='/' render={() => <Shelves books={books} />} />
        <Route path='/search' render={() => <SearchBooks books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
