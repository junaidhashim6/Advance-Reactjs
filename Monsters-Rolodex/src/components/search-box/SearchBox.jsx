/* eslint-disable react/prop-types */
import { Component } from "react";
import "../search-box/search-box.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}
