import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,NavLink
} from 'react-router-dom'

import './App.css'

import Popular from './populares'
import Recomendados from './recomendados'
import Cerca from './cerca'

export default class Navbar extends Component{
  render(){
    return(
      <Router>
       <div>
          <div className="navbar">
           <div className="tab"><NavLink activeClassName="selected"to="/popular">Populares</NavLink></div>
           <div className="tab"><NavLink activeClassName="selected" to="/about" >Recomendados</NavLink></div>
           <div className="tab"><NavLink activeClassName="selected"to="/topics">Cerca de ti</NavLink></div>
         </div>

         <hr/>

         <Route exact path="/popular" component={Popular}/>
         <Route path="/about" component={Recomendados}/>
         <Route path="/topics" component={Cerca}/>
       </div>
     </Router>
    );
  }
}
