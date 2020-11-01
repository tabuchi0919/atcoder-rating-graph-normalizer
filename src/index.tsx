import React from "react";
import { render } from "react-dom";

import { App } from "./App";

const target = document.getElementById("app");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  target
);
