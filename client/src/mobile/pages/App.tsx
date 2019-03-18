import { render } from 'react-dom';
import * as React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { Main } from './main';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);

render(
  <App/>,
  document.getElementById("app")
);
