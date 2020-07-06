import React, { Component } from "react";
import data from "./../data.json";
class Detail extends Component {
  render() {
    console.log(this.props.match.params.id);

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
              <div classname="jumbotron jumbotron-fluid">
                <div classname="container">
                  <img
                    src={value.image}
                    classname="img-fluid new-detail__image"
                    alt=""
                  />
                  <p classname="lead">{value.title}</p>
                  <hr classname="my-2" />
                  <p>{value.description}</p>

                  <p classname="lead">
                    <a
                      classname="btn btn-primary btn-lg"
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
                <div className="card">
                  <a href="chitiet.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="card">
                  <a href="chitiet.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="card">
                  <a href="chitiet.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="card">
                  <a href="chitiet.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
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
