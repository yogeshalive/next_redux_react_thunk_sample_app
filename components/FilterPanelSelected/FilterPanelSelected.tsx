import React, { Component } from "react";
import FilterPanelSelectedStyles from "./FilterPanelSelected.styles";

export class FilterPanelSelected extends Component {
  render() {
    const { handleResetFilter, selected } = this.props;
    const selectedFilters = selected.map((item) => {
      if (item.value) {
        return (
          <div key={item.key} className="selectedBtn">
            {item.value}
            <span onClick={() => handleResetFilter(item)}>x</span>
          </div>
        );
      } else {
        return "";
      }
    });

    return (
      <FilterPanelSelectedStyles className="selected-wrap">
        <h2>Selected Filters</h2>
        {selectedFilters}
      </FilterPanelSelectedStyles>
    );
  }
}

export default FilterPanelSelected;
