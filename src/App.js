import React from "react";
import logo from "./logo.svg";
import "./App.css";

// C1 : k return 2 the ngang hang voi nhau dc . phai dung ()
function One() {
  return (
    <div>
      <h2>Cach 1</h2>
      <h2>Cach 1.1</h2>
    </div>
  );
}

// C2

var Two = function () {
  return (
    <div>
      <h3>Cach 2</h3>
    </div>
  );
};

var Three = () => (
  <div>
    <h3>Cach 3</h3>
  </div>
);

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
        <Two />
        <Three />
      </header>
    </div>
  );
}

export default App;
