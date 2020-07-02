import React, { Component } from "react";

class Detail extends Component {
  render() {
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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img
              src="http://placehold.it/1900x700"
              className="img-fluid "
              alt=""
            />
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vitae id impedit corrupti odio vero magni quos error
              iusto aliquam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vitae id impedit corrupti odio vero magni quos error
              iusto aliquam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vitae id impedit corrupti odio vero magni quos error
              iusto aliquam.
            </p>
            <p className="lead">
              <a
                className="btn btn-primary btn-lg"
                href="Jumbo action link"
                role="button"
              >
                Jumbo action name
              </a>
            </p>
          </div>
        </div>
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
