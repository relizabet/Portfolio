import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
