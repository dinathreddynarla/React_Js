import React, { useState, useEffect } from "react";
import Cond from "./Components/Cond";
import "./App.css";
import "./Styles/network.css";

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnline = () => {
    setIsOnline(true);
    setShowPopup(true);
    autoHidePopup()
  };

  const handleOffline = () => {
    setIsOnline(false);
    setShowPopup(true);
    autoHidePopup()
  };

  const autoHidePopup = () => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div
          className={`network-status-popup ${isOnline ? "online" : "offline"}`}
        >
          {isOnline ? "You are online" : "You are offline"}
        </div>
      )}

      <Cond isLoggedIn={isLoggedIn} />

      <div className="button-container">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={toggleLogin}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={toggleLogin}>
            Login
          </button>
        )}
      </div>
    </>
  );
}

export default App;
