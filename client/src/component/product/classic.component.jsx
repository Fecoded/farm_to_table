import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Classic = ({ user: { isAuthenticated } }) => {
  return (
    <div className="container mt-6">
      <div className="col mt-4 py-2" id="tables">
        <div className="component-wrapper rounded shadow">
          <div className="p-4 border-bottom">
            <h4 className="title mb-0"> ₦5,500 Subscription </h4>
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
        <h6 className="text-muted ">Total Amount Payable ₦5,500</h6>
      </div>
      {isAuthenticated && (
        <form>
          <div className="col-6">
            <div className="form-group position-relative">
              <label>
                Delivery address <span className="text-danger">*</span>
              </label>
              <textarea
                name="comments"
                id="comments"
                rows="4"
                className="form-control"
                placeholder="House or street address :"
              ></textarea>
            </div>
          </div>

          <div className="col-6">
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
              />
            </div>
          </div>

          <div className="col-6">
            <div className="form-group position-relative">
              <label>
                Upload Proof of Payment <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="form-control"
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
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(Classic);
