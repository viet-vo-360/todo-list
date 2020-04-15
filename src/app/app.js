import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router";
import styled from "@emotion/styled";
import Routes from "./routes";

const Main = styled("main")`
  margin-top: 20px;
`;

const BaseApp = () => {
  return (
    <div id="app">
      <Main id="content">
        <Routes />
      </Main>
    </div>
  );
};

export default BaseApp;
