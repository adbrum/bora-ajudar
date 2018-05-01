import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Campaigns from "./components/Campanigns/Campaigns"
import Admin from "./components/Admin/Admin"
import Login from "./components/Login/Login";
import Donate from "./components/Campanigns/Donate";


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
              <Route exact path='/donate' component={Donate}/>
              <Footer/>
          </div>
        </Router>
    )
  }
}

export default App
