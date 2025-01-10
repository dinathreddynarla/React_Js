import React, { useState } from "react";
import "../Styles/LoginForm.css"
const Form = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert , setShowAlert] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }else if (name === "username"){
        setUsername(value)
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    setShowAlert(true)
   
  };

  return (
    <div className="loginForm">
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required/>
        <button type="submit">Login</button>
      </form>
      {showAlert && (
        <div className="alertBox">
          <h3>Login Successful</h3>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Form;
