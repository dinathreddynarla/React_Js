import React, { Component } from 'react'
import Products from "../Data/Products"
import Tabledata from './Tabledata'
import "../Styles/cond.css"
export default class Cond extends Component {
  render() {
    console.log(this.props)
    
    return (
          <>
          {
        this.props.isLoggedIn ?
            <>
            <div className="welcome-message">Hi Welcome!!</div> 
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <Tabledata data={Products}/>
                </tbody>
            </table>
            </>
            : 
            <div className="login-message">Please Login</div>
            }
          </>
    )
  }
}
