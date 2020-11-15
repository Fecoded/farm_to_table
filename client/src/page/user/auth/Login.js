import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Alert from "../../../component/alert/alert.component";

import { login } from "../../../redux/user/user.actions";
import { selectCurrentUser } from "../../../redux/user/user.selectors";

const Login = ({ login, user: { isAuthenticated } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <section className="bg-home d-flex align-items-center">
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <Alert />
            <div className="card login-page bg-white shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title text-center">Login</h4>
                <form className="login-form mt-4" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Email Address <span className="text-danger">*</span>
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={email}
                          autoFocus={true}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          autoComplete="off"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <p className="forgot-pass mb-0">
                          <Link
                            to="/forgotpassword"
                            className="text-dark font-weight-bold"
                          >
                            Forgot password ?
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-0">
                      <button className="btn btn-success btn-block">
                        Sign in
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark mr-2">
                          Don't have an account ?
                        </small>{" "}
                        <Link
                          to="/register"
                          className="text-dark font-weight-bold"
                        >
                          Sign Up
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

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { login })(Login);
