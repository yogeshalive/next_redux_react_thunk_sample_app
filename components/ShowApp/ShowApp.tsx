import React, { Component } from "react";
import dynamic from "next/dynamic";
import debounce from "lodash/debounce";
import FilterPanel from "../FilterPanel";
import FilterPanelSelected from "../FilterPanelSelected";
import SearchSortPanel from "../SearchSortPanel";
import { APIKeysObj } from "../../constants";
import Spinner from "../Spinner";

import ShowAppStyles from "./ShowApp.styles";

const CharacterListComponent = dynamic(() => import("../CharacterList"));

class ShowApp extends Component {
  state = {
    characterName: "",
    sortingOrder: "",
    species: "",
    gender: "",
    origin: "",
  };

  componentDidMount() {
    window.onscroll = debounce(this.infiniteScroll, 100);
  }

  infiniteScroll = () => {
    const {
      getCharactersList,
      characters: {
        results: charactersList,
        info: { pages },
      },
    } = this.props;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      const currentPage = charactersList.length / 20;
      const nextPage = currentPage + 1;
      if (nextPage <= pages) {
        getCharactersList(nextPage);
      }
    }
  };

  performSearch = (searchValue) => {
    this.setState({
      characterName: searchValue,
    });
  };

  handleSorting = (sortingOrder) => {
    this.setState({
      sortingOrder,
    });
  };

  performFilter = (event) => {
    this.setState({ [event.target.name]: APIKeysObj[event.target.id] });
  };

  performResetFilter = (item) => {
    const key = item.key;
    this.setState({ [key]: "" });
  };

  render() {
    const { characterName, sortingOrder, species, gender, origin } = this.state;

    const {
      characters: { results: charactersList },
    } = this.props;

    const selected = [
      {
        key: "species",
        value: species,
      },
      {
        key: "gender",
        value: gender,
      },
      {
        key: "origin",
        value: origin,
      },
    ];

    let filteredList = charactersList.filter((character) => {
      const lowerCasedItem = character.name.toLowerCase();
      let allFilterPassed = true;
      if (characterName && !lowerCasedItem.includes(characterName)) {
        allFilterPassed = false;
      }
      if (allFilterPassed && species) {
        if (species === "Other Species ...") {
          if (APIKeysObj["species-others"].includes(character.species)) {
            allFilterPassed = false;
          }
        } else if (character.species.toLowerCase() !== species.toLowerCase()) {
          allFilterPassed = false;
        }
      }

      if (
        allFilterPassed &&
        gender &&
        character.gender.toLowerCase() !== gender.toLowerCase()
      ) {
        allFilterPassed = false;
      }

      if (allFilterPassed && origin) {
        if (origin === "Other Origins ...") {
          if (APIKeysObj["origin-unknowns"].includes(character.origin.name)) {
            allFilterPassed = false;
          }
        } else if (
          character.origin.name.toLowerCase() !== origin.toLowerCase()
        ) {
          allFilterPassed = false;
        }
      }

      return allFilterPassed;
    });

    // doing nothing for Ascending as i know my data is already sorted in ascending order
    // just reversing the array in case of descending
    if (sortingOrder === "desc") {
      filteredList = filteredList.reverse();
    }

    return (
      <ShowAppStyles className="App">
        <div className="container main-content">
          <div className="row">
            <div className="col-12 col-md-3 filter-panel">
              <aside className="aside">
                <FilterPanel
                  filterData={this.state}
                  handleFilter={this.performFilter}
                />
              </aside>
            </div>
            <div className="col-12 col-md-9">
              <div className="sticky-header">
                <div className="selected-panel">
                  <FilterPanelSelected
                    selected={selected}
                    handleResetFilter={this.performResetFilter}
                  />
                </div>
                <div className="search-sort-panel">
                  <SearchSortPanel
                    handleSearch={this.performSearch}
                    handleSorting={this.handleSorting}
                  />
                </div>
              </div>
              <div className="characters-panel">
                <main>
                  <CharacterListComponent characters={filteredList} />
                </main>
              </div>
            </div>
          </div>
        </div>
      </ShowAppStyles>
    );
  }
}

export default ShowApp;
