import * as React from "react";
import { Link } from 'react-router-dom';
import { AppConsumer } from 'src/mobile/AppProvider';

const Working = () => {
  const updateAppState = (appProps: any) =>
    (sValue: string) => () => appProps.actions.setValue(sValue);

  const App = (
    <AppConsumer>
      {(value) => (
        <>
          <h1>hello Woking</h1>
          <Link to={"/ajax"}>{value.state.value}</Link>
          <button onClick={updateAppState(value)('appValueChanged')}>setValues</button>
        </>
      )}
    </AppConsumer>
  );

  return App;
};

export default Working;
