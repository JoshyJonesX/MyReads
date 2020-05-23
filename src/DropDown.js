import React, { Component } from "react";
import propTypes from "prop-types";

class DropDown extends Component {
  static propTypes = {
    selected: propTypes.string.isRequired,
    onBookUpdate: propTypes.func.isRequired,
  };

  state = {
    value: this.props.selected || "none",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.props.onBookUpdate(value);
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div className='book-shelf-changer'>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='move' disabled>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

export default DropDown;
