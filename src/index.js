import React from "react";
import ReactDOM from "react-dom";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import App from "./App";
import "../node_modules/uikit/dist/css/uikit.min.css";
import "./styles.css";
UIkit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
