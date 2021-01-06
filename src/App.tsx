import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from './components/Footer/Footer';

class App extends React.Component<{}> {

  render(){

    return (
      <div className="App">
        <Router>
          {/* <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch> */}
          <Home />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
