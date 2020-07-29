import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home.component";
import Navbar from "./components/navbar.component";
// import Us from './components/us.component'
// import Express from './components/express.component'
// import Albums from './components/albums.component'
// import Me from './components/me.component'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/us" component={Us} />
        <Route path="/express" component={Express} />
        <Route path="/albums" component={Albums} />
        <Route path="/me" component={Me} /> */}
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
