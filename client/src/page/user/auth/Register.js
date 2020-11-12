import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="bg-home d-flex align-items-center">
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="card login-page bg-white shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title text-center">Sign Up</h4>
                <form className="login-form mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <label>
                          First name <span className="text-danger">*</span>
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          name="s"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group position-relative">
                        <label>
                          Last name <span className="text-danger">*</span>
                        </label>

                        <input
                          type="text"
                          className="form-control pl-5"
                          placeholder="Last Name"
                          name="s"
                          required
                        />
                      </div>
                    </div>

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
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Phone Number <span className="text-danger">*</span>
                        </label>

                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone"
                          name="phone"
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
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
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
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              I Accept{" "}
                              <Link
                                to="/terms-conditons"
                                className="text-primary"
                              >
                                Terms And Condition
                              </Link>
                            </label>
                          </div>
                        </div>
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
                          Already have an account ?
                        </small>{" "}
                        <Link
                          to="/login"
                          className="text-dark font-weight-bold"
                        >
                          Sign In
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

export default Register;
