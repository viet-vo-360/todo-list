import React from "react";
import styled from "@emotion/styled";
import Routes from "./routes";
import "antd/dist/antd.css";
import "./app.css";

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
