import React, { Component } from "react"
import { render } from "react-dom"
 /* eslint-disable */
import App from './App'
import Navbar from './Navbar'

class  Index extends Component{
  render(){
    return(
      <div>
        <App/>
        <Navbar/>
      </div>
    )
  }
}



render(<Index/>,window.document.getElementById("root"));
