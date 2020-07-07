import React, { Component } from "react";
import "./contact.scss";
import { Redirect } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
    };
  }

  handleSubmit = (event) => {
    // khong cho chuyen trang
    event.preventDefault();
    this.setState({
      isRedirect: true,
      userName: "",
      email: "",
      phoneNumber: "",
      msg: "",
    });
  };

  isChange = (event) => {
    console.log(event.target.name); // name input
    console.log(event.target.value); // value input
  };

  // handleChange = (event) => {
  //   this.setState({

  //   })
  // };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <header className="masthead tintuc">
          {/* Begins tin tuc */}
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">Trang lien he</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="page-section" id="contact">
          <div className="container">
            {/* Contact Section Heading */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Contact Me
            </h2>
            {/* Icon Divider */}
            <div className="divider-custom">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon">
                <i className="fas fa-star" />
              </div>
              <div className="divider-custom-line" />
            </div>
            {/* Contact Section Form */}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label className="label-form">Name</label>
                      <input
                        className="form-control"
                        id="name"
                        name="userName"
                        type="text"
                        placeholder="Name"
                        required="required"
                        data-validation-required-message="Please enter your name."
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label className="label-form">Email Address</label>
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                        onChange={(event) => this.isChange(event)}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label className="label-form">Phone Number</label>
                      <input
                        className="form-control"
                        id="phone"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label className="label-form">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-xl"
                      id="sendMessageButton"
                      onClick={(event) => {
                        this.handleSubmit(event);
                      }}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End contact */}
      </div>
    );
  }
}

export default Contact;
