import * as React from "react";
import {render} from "react-dom";
import 'sanitize.css';

const App = () => (
  <>
    <span>hello world!</span>
  </>
);

render(
  <App/>,
  document.getElementById("app")
);
