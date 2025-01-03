import React, { Component } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header"
import "../Styles/Home.css"

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}


