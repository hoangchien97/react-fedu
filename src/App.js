import React from "react";
import logo from "./logo.svg";
import "./App.css";

// C1 : k return 2 the ngang hang voi nhau dc . phai dung ()
function One() {
  return (
    <div>
      <h2>tap 1</h2>
      <h2>tap 2</h2>
    </div>
  );
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
        <One></One>
      </header>
    </div>
  );
}

export default App;
