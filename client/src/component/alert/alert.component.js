import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentAlert } from "../../redux/alert/alert.selector";

const index = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} class={`alert alert-${alert.alertType}`} role="alert">
      {alert.msg}{" "}
    </div>
  ));

const mapStateToProps = createStructuredSelector({
  alerts: selectCurrentAlert,
});

export default connect(mapStateToProps)(index);
