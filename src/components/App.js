import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from "./Home";
import About from './About';

function App() {
  return (
    <div>
      
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}
export default App;
