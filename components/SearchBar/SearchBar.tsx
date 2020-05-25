import React, { Component } from "react";
import SearchBarStyles from "./SearchBar.styles";
export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  searchCharacter = ({ target }) => {
    this.setState({ searchValue: target.value });
  };

  handleSearch(event) {
    const { handleSearch } = this.props;
    const { searchValue } = this.state;
    handleSearch(searchValue);
    event.preventDefault();
  }

  render() {
    return (
      <SearchBarStyles className="search-wrap">
        <div>Search By Name </div>
        <div>
          <input
            type="text"
            className="search-input"
            onChange={this.searchCharacter}
            name="search"
            placeholder="Type smth..."
          />
          <button className="search-button" onClick={this.handleSearch}>
            {" "}
            Search
          </button>
        </div>
      </SearchBarStyles>
    );
  }
}

export default SearchBar;
