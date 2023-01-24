import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from './About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/' >
          <Home/>
        </Route>
        <Route path='/about' >
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
