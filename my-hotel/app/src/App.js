import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Customers from "./component/customers";
import Header from "./component/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Customers />
      </div>
    );
  }
}

export default App;
