import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  static propTypes = {
    onSearchChange: propTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.props.onSearchChange(this.state.value);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
