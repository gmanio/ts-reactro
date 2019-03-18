import * as React from "react";
import 'sanitize.css';
import MainBanner from "../containers/main/MainBanner";
import Search from '../containers/main/Search';

export const Main = () => (
  <>
    <Search></Search>
    <MainBanner></MainBanner>
  </>
);

