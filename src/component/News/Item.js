import React, { Component } from "react";
import changeURLToSlug from "./../../helper";
import "./new.scss";
class NewItem extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <a
              href={
                "/new/" +
                changeURLToSlug(this.props.title) +
                "." +
                this.props.id +
                ".html"
              }
            >
              <img
                src={this.props.img}
                className="img-fluid"
                style={{ width: "100%", height: "205px" }}
                alt="some value"
              />
            </a>
            <blockquote className="blockquote">
              <h4 className="title">{this.props.title}</h4>
              <p className="description">{this.props.description}</p>
              <footer className="card-blockquote">
                <cite title="Source title">From Fedu</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
