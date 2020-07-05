import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
// import Home from "./component/Home/Home";
import Footer from "./component/Footer.js/Footer";
import Content from "./router/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
