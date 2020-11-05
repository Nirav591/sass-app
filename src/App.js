import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./components/Pages/About"

import Header from './components/Elements/Header';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';
import Services from './components/Pages/Services';
import HomeElement from './components/Elements/Home';
import AwesomeSection from './components/Elements/AwesomeSection';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomeElement />
          <AwesomeSection />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
