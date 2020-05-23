import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const arrNumber = [1, 2, 3, 4, 5, 6];

const arrNumberNew = arrNumber.map((x) => x * 2 + ",");

const arrNew = arrNumber.map((x) => (
  <div>
    <li>{x * 2}</li>
  </div>
));
class App2 extends Component {
  render() {
    return <div>{arrNumberNew}</div>;
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
        <App2 />
        <ul>{arrNew}</ul>
      </header>
    </div>
  );
}

export default App;
