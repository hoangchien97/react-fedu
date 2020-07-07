import React, { Component } from "react";
import data from "./../data.json";
import NewRelated from "./NewRelated";
class Detail extends Component {
  render() {
    var count = 1;
    return (
      <div>
        <header className="masthead tintuc">
          {/* Begins tin tuc */}
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">Chi tiet tin tức</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {data.map((value, key) => {
          if (value.id === +this.props.match.params.id) {
            return (
              <div className="jumbotron jumbotron-fluid" key={value.id}>
                <div className="container">
                  <img
                    src={value.image}
                    className="img-fluid new-detail__image"
                    alt=""
                  />
                  <p className="lead">{value.title}</p>
                  <hr className="my-2" />
                  <p>{value.description}</p>

                  <p className="lead">
                    <a
                      className="btn btn-primary btn-lg"
                      href="Jumbo action link"
                      role="button"
                    >
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            );
          }
          return true;
        })}
        <div className="container">
          <div className="card border-primary">
            <img className="card-img-top" src alt="" />
            <div className="card-body">
              <h4 className="card-title">Tin lien quan</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card-deck">
                {data.map((value, key) => {
                  if (value.id !== +this.props.match.params.id) {
                    if (count <= 4) {
                      return (
                        <NewRelated
                          key={value.id}
                          id={value.id}
                          title={value.title}
                          description={value.description}
                          img={value.image}
                        ></NewRelated>
                      );
                    }
                  }
                  return true;
                })}
              </div>
            </div>
          </div>
        </div>
        {/* End New Detail */}
      </div>
    );
  }
}

export default Detail;
