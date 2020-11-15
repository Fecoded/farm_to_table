import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../../redux/admin/admin.actions";
import Alert from "../../../component/alert/alert.component";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <section className="bg-home d-flex align-items-center">
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <Alert />
            <div className="card login-page bg-white shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title text-center">Admin Login</h4>
                <form className="login-form mt-4" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Username <span className="text-danger">*</span>
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="username"
                          name="email"
                          value={email}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mb-0">
                      <button className="btn btn-success btn-block">
                        Sign in
                      </button>
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

export default connect(null, { login })(Login);
