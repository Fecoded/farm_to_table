import { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createSubscription } from "../../redux/subscription/subscription.actions";

import Alert from "../alert/alert.component";

const Product = ({
  user: { isAuthenticated, user },
  createSubscription,
  history,
}) => {
  const [image, setFile] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phone, setPhone] = useState("");

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    createSubscription({
      firstName: user && user.first_name,
      lastName: user && user.last_name,
      plan: "Standard",
      image,
      deliveryAddress,
      phone,
      history,
    });

    console.log();
  };

  return (
    <div className="container mt-6">
      <Alert />
      <div className="col mt-4 py-2" id="tables">
        <div className="component-wrapper rounded shadow">
          <div className="p-4 border-bottom">
            <h4 className="title mb-0"> ₦3,500 Subscription </h4>
          </div>

          <div className="p-4">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table mb-0 table-center">
                <thead>
                  <tr>
                    <th scope="col">Commodity</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price(₦)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rice</td>
                    <td>5kg</td>
                    <td>2,000</td>
                  </tr>
                  <tr>
                    <td>Garri</td>
                    <td>2.5kg</td>
                    <td>1,000</td>
                  </tr>
                  <tr>
                    <td>Banana & Apple</td>
                    <td>2.5kg</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-3 justify-content-between">
        <h6 className="text-muted">Delivery Cost: ₦1,000</h6>
        <h6 className="text-muted ">Total Amount Payable ₦4,500</h6>
      </div>
      {isAuthenticated && (
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={onSubmit}>
              <div className="col-10">
                <div className="form-group position-relative">
                  <label>
                    Delivery address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="deliveryAddress"
                    id="comments"
                    rows="4"
                    className="form-control"
                    placeholder="House or street address :"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="col-9">
                <div className="form-group">
                  <label>
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Phone no :"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-9">
                <div className="form-group position-relative">
                  <label>
                    Upload Proof of Payment{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="file"
                    ref={inputRef}
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>

              <p className="text-danger ml-3">
                Please note that deliveries are only done on Saturdays
              </p>
              <input
                type="submit"
                value="Submit"
                className="btn btn-success ml-3 mb-3"
              />
            </form>
          </div>
          <div className="mt-3">
            <div className="p-4 shadow h-50">
              <h4>Account Details</h4>
              <h5>Account Name: RAYANDMO FARMS</h5>
              <h5>Account No: 1020264203</h5>
              <h5>Bank: United Bank for Africa (UBA)</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { createSubscription })(
  withRouter(Product)
);
