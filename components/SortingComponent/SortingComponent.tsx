import React, { Component } from "react";
import styled from "styled-components";
import SortingComponentStyles from "./SortingComponent.styles";

class SortingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingOrder: "",
    };

    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSortByChange = (event) => {
    const { handleSorting } = this.props;
    const value = event.target.value;
    this.setState({ sortingOrder: value }, () => {
      handleSorting(value);
    });
  };

  render() {
    const { sortingOrder } = this.state;
    return (
      <SortingComponentStyles className="sorting-wrap">
        <select value={sortingOrder} onChange={this.handleSortByChange}>
          <option value=""> Sort By ID </option>
          <option value="asc"> Ascending </option>
          <option value="desc"> Descending </option>
        </select>
      </SortingComponentStyles>
    );
  }
}

export default SortingComponent;
