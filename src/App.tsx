import React from 'react';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
