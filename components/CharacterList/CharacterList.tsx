import React, { Component } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import styled from "styled-components";
import CharacterListStyles from "./CharacterList.styles";

interface CharacterListProps {
  characters?: Array<any>;
}

export class CharacterList extends Component<CharacterListProps> {
  render() {
    const { characters } = this.props;
    let characterList = characters.map((character) => {
      return <CharacterItem key={character.id} data={character} />;
    });

    if (!characterList.length) {
      characterList = "No Matching data found. Please check your filters.";
    }

    return (
      <CharacterListStyles className="characters-wrap row">
        {characterList}
      </CharacterListStyles>
    );
  }
}

export default CharacterList;
