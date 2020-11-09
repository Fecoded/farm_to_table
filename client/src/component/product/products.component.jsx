import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mt-4 pt-2">
          <div className="section-title">
            <h4>Product Catalog</h4>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card pricing-rates business-rate shadow bg-light rounded text-center border-0">
            <div className="card-body py-5">
              <h2 className="title text-uppercase mb-4">Standard</h2>
              <div className="d-flex justify-content-center mb-4">
                <span className="h4 mb-0 mt-2">₦</span>
                <span className="price h1 mb-0">3,500</span>
                {/* <span className="h4 align-self-end mb-1">/mo</span> */}
              </div>

              <ul className="list-unstyled mb-0 pl-0">
                <li className="h6 text-muted mb-0">
                  <span className="text-primary h5 mr-2">
                    <i className="uim uim-check-circle"></i>
                  </span>
                  Rice &nbsp; &nbsp;&nbsp; 5kg &nbsp; ₦2000
                </li>
                <li className="h6 text-muted mb-0">
                  <span className="text-primary h5 mr-2">
                    <i className="uim uim-check-circle"></i>
                  </span>
                  Garri &nbsp; &nbsp;&nbsp; 2.5kg &nbsp; ₦1,500
                </li>
                <li className="h6 text-muted mb-0">
                  <span className="text-primary h5 mr-2">
                    <i className="uim uim-check-circle"></i>
                  </span>
                  Banana & Apple &nbsp;&nbsp;&nbsp;2.5kg &nbsp;₦500
                </li>
              </ul>
              <Link to="/standard" className="btn btn-success mt-4">
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card pricing-rates business-rate shadow bg-light rounded text-center border-0">
            <div className="card-body py-5">
              <h2 className="title text-uppercase mb-4">Classic</h2>
              <div className="d-flex justify-content-center mb-4">
                <span className="h4 mb-0 mt-2">₦</span>
                <span className="price h1 mb-0">5,500</span>
                {/* <span className="h4 align-self-end mb-1">/mo</span> */}
              </div>

              <ul className="list-unstyled mb-0 pl-0">
                <li className="h6 text-muted mb-0">
                  <span className="text-primary h5 mr-2">
                    <i className="uim uim-check-circle"></i>
                  </span>
                  Rice &nbsp; &nbsp;&nbsp; 5kg &nbsp; ₦2000
                </li>
                <li className="h6 text-muted mb-0">
                  <span className="text-primary h5 mr-2">
                    <i className="uim uim-check-circle"></i>
                  </span>
                  Garri &nbsp; &nbsp;&nbsp; 2.5kg &nbsp; ₦3000
                </li>
                <li className="h6 text-muted mb-0">
                  <span className="text-primary h5 mr-2">
                    <i className="uim uim-check-circle"></i>
                  </span>
                  Banana & Apple&nbsp;&nbsp;&nbsp;2.5kg&nbsp;₦500
                </li>
              </ul>
              <Link to="/classic" className="btn btn-success mt-4">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
