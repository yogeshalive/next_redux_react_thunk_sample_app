import { NextPageContext, NextComponentType } from "next";
import { compose } from "recompose";
import { connect } from "react-redux";
import Page from "../containers/page";
import { getCharactersListSuccess } from "../actions/characters";
import { Store } from "../store";

interface IndexPageContext extends NextPageContext {
  store: Store;
}

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page);

IndexPage.getInitialProps = async ({ store, req }) => {
  const isServer: boolean = !!req;
  const { characters } = store.getState();

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=1`
  );
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();

  // we can add any custom data here
  // for examle, the data from api server
  store.dispatch(getCharactersListSuccess(data));

  return {
    characters,
    isServer,
  };
};

export default connect()(IndexPage);
