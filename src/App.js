import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Campaigns from "./Campaigns"
import Admin from "./Admin"
import Login from "./Login";


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Header/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/campaigns' component={Campaigns}/>
              <Route exact path='/contact' component={Contact}/>
              <Route path='/admin' component={Admin}/>
              <Route exact path='/login' component={Login}/>
              <Footer/>
          </div>
        </Router>
    )
  }
}

export default App
