/* eslint-disable react/prop-types */
import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}
