const Profile = () => {
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
                  <th>Delivery Address</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
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
  );
};

export default Profile;
