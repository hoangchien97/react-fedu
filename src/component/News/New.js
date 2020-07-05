import React, { Component } from "react";
import NewItem from "./Item";
import data from "./../data.json";
class New extends Component {
  render() {
    return (
      <div>
        <header className="masthead tintuc">
          {/* Begins tin tuc */}
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">Tin tức</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            {data.map((value, index) => {
              return (
                <NewItem
                  key={index}
                  id={value.id}
                  title={value.title}
                  img={value.image}
                  description={value.description}
                ></NewItem>
              );
            })}
          </div>
        </div>
        {/* End tin tuc */}
      </div>
    );
  }
}

export default New;
