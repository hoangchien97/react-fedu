import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "../component/News/New";
import Detail from "../component/News/Detail";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home";

class Content extends Component {
  render() {
    return (
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/new-detail">
            <Detail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Content;
