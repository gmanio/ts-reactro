import * as React from "react";
import { AppConsumer } from 'src/mobile/AppProvider';

const Working = () => {

  const App = (
    <AppConsumer>
      {(appProps) => (
        <>
          <h1>hello Woking</h1>
          <a href="/ajax">{appProps.state.value}</a>
        </>
      )}
    </AppConsumer>
  );

  return App;
};

export default Working;
