import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }
}
  
  ReactDOM.render(<App name="Jinseok" />, document.getElementById("app"));