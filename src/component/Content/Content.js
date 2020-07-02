import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormEdit: true,
    };
  }

  renderButton = () => (
    <div className="row">
      <div className="btn btn-group">
        <div className="btn btn-info" onClick={() => this.clickEdit()}>
          Edit
        </div>
        <div className="btn btn-warning">Remove</div>
      </div>
    </div>
  );

  renderForm = () => (
    <div className="row">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name
          id
          aria-describedby="helpId"
          placeholder
          ref={(value) => {
            this.dataEdit = value;
          }}
          defaultValue={this.props.title}
        />
      </div>
      <div
        className="btn btn-success"
        style={{ height: "38px", marginLeft: "10px" }}
        onClick={() => this.clickSave()}
      >
        Save
      </div>
    </div>
  );

  clickEdit = () => {
    this.setState({
      showFormEdit: false,
    });
  };

  clickSave = () => {
    this.setState({
      showFormEdit: true,
    });
    console.log(this.dataEdit.value);
  };

  displayData = () => {
    if (this.state.showFormEdit) {
      return this.renderButton();
    } else {
      return this.renderForm();
    }
  };

  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={"col-lg-6 " + this.props.positionImg}>
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src={this.props.img}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">{this.props.title}</h2>
                  <p>{this.props.description}</p>
                </div>
              </div>
            </div>
            {this.displayData()}
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
