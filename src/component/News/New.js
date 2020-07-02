import React, { Component } from "react";

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
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <a href="chitiet.html">
                    <img
                      src="http://placehold.it/800x400"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <blockquote className="blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi, aut?
                    </p>
                    <footer className="card-blockquote">
                      <cite title="Source title">From Fedu</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <a href="chitiet.html">
                    <img
                      src="http://placehold.it/800x400"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <blockquote className="blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi, aut?
                    </p>
                    <footer className="card-blockquote">
                      <cite title="Source title">From Fedu</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <a href="chitiet.html">
                    <img
                      src="http://placehold.it/800x400"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <blockquote className="blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi, aut?
                    </p>
                    <footer className="card-blockquote">
                      <cite title="Source title">From Fedu</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End tin tuc */}
      </div>
    );
  }
}

export default New;
