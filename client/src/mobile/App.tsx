import 'sanitize.css';
import 'babel-polyfill';
import { render } from 'react-dom';
import * as React from 'react';
import { Suspense } from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import { Main } from './pages/main';
import { List } from './pages/list';
import ErrorBoundary from '../common/ErrorBoundary';
import Ajax from './pages/Ajax';
import Working from './pages/Working';
import { AppProvider } from './AppProvider';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/list" component={List}/>
            <Route exact path="/ajax" component={Ajax}/>
            <Route exact path="/working" component={Working}/>
            {/*<Route exact path="/notice" componet={Notice}/>*/}
            <Route component={() => (<div>No Match</div>)}/>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </AppProvider>
  </BrowserRouter>
);

render(
  <App/>,
  document.getElementById('app')
);
