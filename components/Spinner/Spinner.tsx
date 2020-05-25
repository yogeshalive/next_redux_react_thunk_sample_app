import React, { Fragment } from "react";
import SpinnerStyles from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerStyles>
      <div className="loader-wrap">
        <div className="loader" />
      </div>
    </SpinnerStyles>
  );
};

export default Spinner;
