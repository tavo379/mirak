import React, { Component } from 'react';
import './App.css';

export default class Objeto extends Component {
 render() {
     return (
       <div className="data-box">
         {this.props.data.map((algo)=>
           <div className="post-box" key={algo['_id']}>
             <div className="imagen">
               Aca va la imagen
             </div>
             <h1>{algo.title}</h1>
             <span> {algo.description}</span>
           </div>
         )}
       </div>
     )

 }
}
