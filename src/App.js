import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
// import Home from "./component/Home/Home";
import Footer from "./component/Footer.js/Footer";
import Content from "./router/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
