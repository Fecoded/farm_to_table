import React from "react";
import errorImg from "../../assets/error.svg";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <section class="bg-home d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-12 text-center">
                <img src={errorImg} class="img-fluid" alt="" />
                <div class="text-uppercase mt-4 display-3">Oh ! no</div>
                <div class="text-capitalize text-dark mb-4 error-page">
                  Page is Broken
                </div>
              </div>
            </div>

            {/* <div class="row">
                <div class="col-md-12 text-center">  
                    <a href="index.html" class="btn btn-outline-primary mt-4">Go Back</a>
                    <a href="index.html" class="btn btn-primary mt-4 ml-2">Go To Home</a>
                </div>
            </div> */}
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
