import { Fragment } from "react";

const Profile = () => {
  return (
    <Fragment>
      <section
        class="bg-profile  w-100"
        style={{
          backgroundImage: `url(${"images/account/bg.png"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="card public-profile border-0 rounded shadow"
                style={{ zIndex: 1 }}
              >
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-lg-10 col-md-9">
                      <div class="row align-items-end">
                        <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                          <h3 class="title mb-0">John Doe</h3>
                          <small class="text-muted h6 mr-2">
                            Email Address
                          </small>
                          <ul class="list-inline mb-0 mt-3">
                            <li class="list-inline-item">
                              <a href="#!" class="text-muted" title="Instagram">
                                <i
                                  data-feather="instagram"
                                  class="fea icon-sm"
                                ></i>
                                Pnone Number
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
      <section class="section mt-60">
        <div class="container mt-lg-3">
          <div className="p-4 ">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table table-center">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Date</th>
                    <th>Delivery Address</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rice</td>
                    <td>5kg</td>
                    <td>2,000</td>
                    <td>2020-11-12</td>
                    <td>Not Delivered</td>
                  </tr>
                  <tr>
                    <td>Garri</td>
                    <td>2.5kg</td>
                    <td>1,000</td>
                    <td>2020-11-12</td>
                    <td>Not Delivered</td>
                  </tr>
                  <tr>
                    <td>Banana & Apple</td>
                    <td>2.5kg</td>
                    <td>500</td>
                    <td>2020-11-12</td>
                    <td>Not Delivered</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
