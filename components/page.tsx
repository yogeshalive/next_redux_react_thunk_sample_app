import React from "react";
import { compose } from "recompose";
import ShowApp from "./ShowApp";

const Page = (props) => {
  return <ShowApp {...props} />;
};

export default compose()(Page);
