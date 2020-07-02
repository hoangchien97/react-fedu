import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer.js/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
