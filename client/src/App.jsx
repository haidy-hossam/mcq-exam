import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, MCQ } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} render={(props) => <Login {...props} />} />
        <Route exact path={'/mcq'} render={(props) => <MCQ {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
