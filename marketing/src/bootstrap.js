// Define a mount fn that starts up this project
// 1. When running in dev mode in isolation, call the mount fn immediately
// 2. When running through container, export the mount fn

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
