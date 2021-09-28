import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
import WebFont from "webfontloader";

import App from "./components/App";

WebFont.load({
  google: {
    families: [
      "Barlow: 600",
      "Fraunces: 700,900",
      "Roboto",
      "Open Sans",
      "Montserrat",
      "Poppins",
    ],
  },
});

const root = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
