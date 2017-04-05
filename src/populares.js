import React, { Component } from 'react';
import Objeto from './objeto';
import './App.css';
//import DATA from '../data';

export default class Popular extends Component{
  constructor(props){
    super(props);
    this.state = {data: []};
}

  componentWillMount(){
    fetch('http://localhost:3001/api/posts')
      .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
          }

          // Examine the text in the response
        response.json().then((data) => {
          console.log(data)
          this.setState({data: data})
        });
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}

  render(){
    return(
      <div className="cerca">
        <h1>Estos son los Post populares</h1>
      <Objeto data={ this.state.data } />
      </div>
    );
  }
}
