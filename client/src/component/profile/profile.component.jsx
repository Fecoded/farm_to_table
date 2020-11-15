import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { getSingleSubscription } from "../../redux/subscription/subscription.actions";
import { selectSubscriptionItem } from "../../redux/subscription/subscription.selectors";

import moment from "moment";
import Spinner from "../spinner/spinner.component";

const Profile = ({ user: { user }, getSingleSubscription, subscriptions }) => {
  useEffect(() => {
    getSingleSubscription();
  }, [getSingleSubscription]);

  return (
    <Fragment>
      <section
        className="bg-profile  w-100"
        style={{
          backgroundImage: `url(${"images/account/bg.png"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card public-profile border-0 rounded shadow"
                style={{ zIndex: 1 }}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-10 col-md-9">
                      <div className="row align-items-end">
                        <div className="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                          <h3 className="title mb-0">{`${
                            user && user.first_name
                          } ${user && user.last_name}`}</h3>
                          <small className="text-muted h6 mr-2">
                            {user && user.email}
                          </small>
                          <ul className="list-inline mb-0 mt-3">
                            <li className="list-inline-item">
                              <a
                                href="#!"
                                className="text-muted"
                                title="Instagram"
                              >
                                <i
                                  data-feather="instagram"
                                  className="fea icon-sm"
                                ></i>
                                {user && user.phone}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="p-4 ">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table table-center">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Date</th>
                    <th>Delivery Address</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions !== null ? (
                    subscriptions.map((subscription) => (
                      <tr key={subscription._id}>
                        <td>{subscription.plan}</td>
                        <td>
                          {moment(subscription.createdAt).format("DD/MM/YYYY")}
                        </td>
                        <td>{subscription.deliveryAddress}</td>
                        <td>{subscription.status}</td>
                      </tr>
                    ))
                  ) : (
                    <Spinner />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  subscriptions: selectSubscriptionItem,
});

export default connect(mapStateToProps, { getSingleSubscription })(Profile);
