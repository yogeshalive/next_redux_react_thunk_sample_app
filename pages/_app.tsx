import { NextPageContext } from "next";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import store, { Store } from "../store";
import GlobalStyle from "../globalStyles";

interface AppContext extends NextPageContext {
  store: Store;
}

class MyApp extends App<AppContext> {
  render() {
    const { store, Component, ...props } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Component {...props} />
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);
