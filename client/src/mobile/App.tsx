import 'sanitize.css';
import {render} from 'react-dom';
import * as React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import {Main} from './pages/main';
import {List} from "./pages/list";

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Main}/>
    <Route path="/list" component={List}/>
  </BrowserRouter>
);

render(
  <App/>,
  document.getElementById("app")
);
