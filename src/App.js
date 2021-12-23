import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from './Main';
import Share from './Share';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/share/:body/:hat/:mouth/:eyes/:accessory/:background">
          <Share />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
