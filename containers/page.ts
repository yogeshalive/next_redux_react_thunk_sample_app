import { connect } from "react-redux";
import { createSelector } from "reselect";
import { compose, pure } from "recompose";
import { getCharactersList } from "../actions/characters";
import { selectCharactersItem, selectCharactersData } from "../selectors";
import Page from "../components/page";

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default compose(
  connect(mapStateToProps, {
    getCharactersList,
  }),
  pure
)(Page);
