import * as React from "react";
import { render } from "react-dom";
import 'sanitize.css';
import MainBanner from "../containers/main/MainBanner";

const App = () => (
  <>
    <MainBanner></MainBanner>
  </>
);

render(
  <App/>,
  document.getElementById("app")
);
