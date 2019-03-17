import * as React from "react";
import { render } from "react-dom";
import 'sanitize.css';
import MainBanner from "../containers/main/MainBanner";
import Search from '../containers/main/Search';

const App = () => (
  <>
    <Search/>
    <MainBanner></MainBanner>
  </>
);

render(
  <App/>,
  document.getElementById("app")
);
