import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

import { checkEmail } from "../../redux/forgotpassword/forgotpassword.action";

import Alert from "../alert/alert.component";

const ForgotPassword = ({ checkEmail }) => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    checkEmail({ email });
  };

  return (
    <section className="bg-home d-flex align-items-center">
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <Alert />
            <div className="card login_page shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title text-center">Recover Account</h4>

                <form className="login-form mt-4" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="text-muted">
                        Please enter your email address. You will receive a link
                        to create a new password via email.
                      </p>
                      <div className="form-group position-relative">
                        <label>
                          Email address <span className="text-danger">*</span>
                        </label>
                        <i
                          data-feather="mail"
                          className="fea icon-sm icons"
                        ></i>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email Address"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="btn btn-success btn-block">
                        Send
                      </button>
                    </div>
                    <div className="mx-auto">
                      <p className="mb-0 mt-3">
                        <small className="text-dark mr-2">
                          Remember your password ?
                        </small>{" "}
                        <Link
                          to="/login"
                          className="text-dark font-weight-bold"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { checkEmail })(ForgotPassword);
