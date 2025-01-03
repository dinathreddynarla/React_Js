import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import "../Styles/Styles.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      registerRedirect :false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      this.setState({ redirect: true });
    } else {
      alert("Invalid credentials");
    }
  };

  redirectRegister = () =>{this.setState({registerRedirect:true})}

  render() {
    const { redirect, registerRedirect } = this.state;

    if (redirect) {
      return <Navigate to="/home" />;
    }

    if (registerRedirect) {
      return <Navigate to="/register" />;
    }
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
          <button type="submit">Login</button>
        <button type="button" onClick={this.redirectRegister}>Register</button>
        </form>
      </div>
    );
  }
}

