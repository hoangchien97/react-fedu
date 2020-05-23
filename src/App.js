import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// C1 using function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// C2 using Class
class Welcome2 extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Welcome name="Chien" />
        <Welcome2 name="Hoang Duc" />
      </header>
    </div>
  );
}

export default App;
