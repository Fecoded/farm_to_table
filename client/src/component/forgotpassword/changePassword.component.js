import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { changePassword } from "../../redux/forgotpassword/forgotpassword.action";
import { setAlert } from "../../redux/alert/alert.action";

import Alert from "../alert/alert.component";

const ChangePassword = ({ match, history, changePassword, setAlert }) => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const { token } = match.params;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      changePassword({ token, password, history });
    } else {
      setAlert("Password does not match", "danger");
    }
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
                <h4 className="card-title text-center">Reset Password</h4>

                <form className="login-form mt-4" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      {/* <p className="text-muted">Reset Password</p> */}
                      <div className="form-group position-relative">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <i
                          data-feather="mail"
                          className="fea icon-sm icons"
                        ></i>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group position-relative">
                        <label>
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <i
                          data-feather="mail"
                          className="fea icon-sm icons"
                        ></i>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          name="confirmpassword"
                          required
                          value={confirmpassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="btn btn-success btn-block">
                        Submit
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

export default connect(null, { changePassword, setAlert })(
  withRouter(ChangePassword)
);
