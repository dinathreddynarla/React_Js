import React, { Component } from "react";
import Cond from "./Components/Cond";
import "./App.css";
import "./Styles/network.css";

class AppClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOnline :window.navigator.onLine,
            isLoggedIn:false,
            showPopup:false
        }
        window.addEventListener("online",this.handleOnline)
        window.addEventListener("offline",this.handleOffline)
    }

    handleOnline = ()=>{
        this.setState({isOnline : true,showPopup:true})
        this.autoHidePopup()
    }

    handleOffline = ()=>{
        this.setState({isOnline : false,showPopup:true})
        this.autoHidePopup()
    }

    autoHidePopup =()=>{
        setTimeout(()=>{
            this.setState({showPopup:false})
        },3000)
    }

    toggleLogin = ()=>{
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn, 
          }));
    }
  render() {

    const {isOnline, isLoggedIn , showPopup} = this.state
    return (
      <>
       
        {showPopup && (
          <div
            className={`network-status-popup ${
              isOnline ? "online" : "offline"
            }`}
          >
            {isOnline ? "You are online" : "You are offline"}
          </div>
        )}

       
        <Cond isLoggedIn={isLoggedIn} />
        <div className="button-container">
          {isLoggedIn ? (
            <button className="logout-btn" onClick={this.toggleLogin}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={this.toggleLogin}>
              Login
            </button>
          )}
        </div>
      </>
    );
  }
}

export default AppClass;
