import { connect } from "react-redux";
import { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import {
  getSubscription,
  updateStatus,
} from "../../redux/subscription/subscription.actions";
import { selectSubscriptionItems } from "../../redux/subscription/subscription.selectors";
import moment from "moment";
import swal from "sweetalert";

import Spinner from "../spinner/spinner.component";

const Profile = ({ getSubscription, subscriptions, updateStatus }) => {
  useEffect(() => {
    getSubscription();
  }, [getSubscription]);

  return (
    <section className="section mt-60">
      <div className="container">
        <div className="p-4 ">
          <div className="table-responsive bg-white shadow rounded">
            <table className="table table-center">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Plan</th>
                  <th>Date</th>
                  <td>Phone</td>
                  <th>Delivery Address</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {subscriptions !== null ? (
                  subscriptions.map((subscription) => (
                    <tr key={subscription._id}>
                      <td>{`${subscription.firstName} ${subscription.lastName}`}</td>
                      <td>{subscription.plan}</td>
                      <td>
                        {moment(subscription.createdAt).format("DD/MM/YYYY")}
                      </td>
                      <td>{subscription.phone}</td>
                      <td>{subscription.deliveryAddress}</td>
                      {subscription.status !== "Delivered" ? (
                        <td
                          className="cursor-pointer"
                          onClick={() =>
                            swal({
                              title: "Afwin Notification",
                              text: `Are you sure package has being delivered to ${subscription.firstName}  ${subscription.lastName}?`,
                              icon: "info",
                              buttons: true,
                              dangerMode: true,
                            }).then((result) => {
                              if (result) {
                                updateStatus(subscription._id);
                              }
                            })
                          }
                        >
                          {subscription.status}
                        </td>
                      ) : (
                        <td>{subscription.status}</td>
                      )}
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
  );
};

const mapStateToProps = createStructuredSelector({
  subscriptions: selectSubscriptionItems,
});

export default connect(mapStateToProps, { getSubscription, updateStatus })(
  Profile
);
