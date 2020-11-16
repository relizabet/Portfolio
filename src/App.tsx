import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './components/pages/Contact';
import "./App.css";
import Footer from './components/Footer/Footer';

class App extends React.Component<{}> {

  render(){

    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
