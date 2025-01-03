import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import "../Styles/Styles.css"


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      otp: '',
      generatedOtp: null,
      verified: false,
      redirect: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleGenerateOtp = () => {
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    this.setState({ generatedOtp: otpCode });
    alert(`Your OTP is: ${otpCode}`);
  };

  handleVerifyOtp = () => {
    if (this.state.otp === this.state.generatedOtp) {
      this.setState({ verified: true });
      alert('OTP verified successfully');
    } else {
      alert('Invalid OTP');
    }
  };

  handleRegister = (e) => {
    e.preventDefault();
    if (!this.state.verified) {
      alert('Please verify OTP first');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email: this.state.email, password: this.state.password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className='container
      '>
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
          <button type="button" onClick={this.handleGenerateOtp}>Generate OTP</button>
          <input type="text" name="otp" placeholder="Enter OTP" value={this.state.otp} onChange={this.handleChange} required/>
          <button type="button" onClick={this.handleVerifyOtp}>Verify OTP</button>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
