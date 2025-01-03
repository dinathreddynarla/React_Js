import React, { Component } from 'react'

export default class Header extends Component {
 constructor(){
   super()
   this.state = {count:0};
 }
render() {
  
    return (
     <>
    
    <h1>count : {this.state.count}</h1>
    
    <button onClick={()=>this.setState({count : this.state.count + 1})}>+</button>
    <button onClick={()=>this.setState({count : this.state.count - 1})}>-</button>
    <button onClick={()=>this.setState({count : 0})}>reset</button>
     </>
    )
  }
}

