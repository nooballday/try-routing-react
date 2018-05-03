import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../app.css';

//components
import Navbar from './Navbar'
import Products from './products'
import About from './about'
import Editor from './editor'

class App extends Component{
  render(){
    return(
      <Router>
        <div className='App'>
          <Navbar/>
          <Route exact path='/products' component={Products}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/editor' component={Editor}/>
        </div>
      </Router>
    )
  }
}

export default App;
