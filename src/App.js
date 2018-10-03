import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./pages/About"
import Discover from "./pages/Discover"
import Search from "./pages/Search"
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
        <Route exact path = "/" component={About} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/discover" component={Discover} />
        <Route exact path = "/search" component={Search} />
       
        </Fragment>
      </Router>
    );
  }
}

export default App;
