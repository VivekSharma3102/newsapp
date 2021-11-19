import './App.css';
import React, { Component } from 'react';
import { Navbar } from './components/navbar';
import {News} from './components/news';
import {Footer} from './components/Footer';

// here we start set up for react router :> 

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from 'react-router-dom'
export class App extends Component {
  
  api_key= process.env.REACT_API_KEY
  
  render() {
    return (
      <>
        <Router>
        <Navbar/>
        <div className="my-4"/>
          <Switch>
            {/* route setup // */}
            <Route exact path="/"><News api_key={this.api_key} key="1" pageSize={9} country="in" category=""/></Route>
            <Route exact path="/general"><News api_key={this.api_key} key="2" pageSize={9} country="in" category="general"/></Route>
            <Route exact path="/business"><News api_key={this.api_key} key="3" pageSize={9} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News api_key={this.api_key} key="4" pageSize={9} country="in" category="Entertainment"/></Route>
            <Route exact path="/health"><News api_key={this.api_key} key="5" pageSize={9} country="in" category="health"/></Route>
            <Route exact path="/science"><News api_key={this.api_key} key="6" pageSize={9} country="in" category="science"/></Route>
            <Route exact path="/sports"><News api_key={this.api_key} key="7" pageSize={9} country="in" category="sports"/></Route>
            <Route exact path="/technology"><News api_key={this.api_key} key="8" pageSize={9} country="in" category="technology"/></Route>
          </Switch>
        </Router>
        <Footer/>
      </>
    )
  }
}

export default App
