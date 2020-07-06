import React, { Component } from "react";
import changeURLToSlug from "./../../helper";
import "./new.scss";
class NewRelated extends Component {
  render() {
    return (
      <div className="card">
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
            className="card-img-top new-related__image"
            src={this.props.img}
            alt=""
          />
        </a>
        <div className="card-body">
          <h4 className="card-title title">{this.props.title}</h4>
          <p className="card-text description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default NewRelated;
