import { Fragment, lazy, Suspense } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";
import "../App.css";

import { selectCurrentUser } from "../redux/admin/admin.selectors";

// Error Handling
import ErrorHandler from "../component/error-boundary/error-boundary.component";

// Spinner
import Spinner from "../component/spinner/spinner.component";

// PROTECTED ROUTING
import PrivateRouteAdmin from "../component/routing/PrivateRouteAdmin";
import PrivateRouteUser from "../component/routing/PrivateRouteUser";

// Admin
const AdminLogin = lazy(() => import("./admin/auth/Login"));
const AdminProfile = lazy(() => import("./admin/Profile"));

// Landing Page
const Landing = lazy(() => import("./Landing"));
const Product = lazy(() => import("./Product"));
const Standard = lazy(() => import("./Standard"));
const Classic = lazy(() => import("./Classic"));

// User
const UserLogin = lazy(() => import("./user/auth/Login"));
const UserRegister = lazy(() => import("./user/auth/Register"));
const UserProfile = lazy(() => import("./user/Profile"));

const Routes = ({ admin: { isAuthenticated, user } }) => {
  return (
    <Fragment>
      <Switch>
        <ErrorHandler>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Landing} />
            <Route path="/product" component={Product} />
            <Route path="/standard" component={Standard} />
            <Route path="/classic" component={Classic} />
            <Route path="/login" component={UserLogin} />
            <Route path="/admin/login" component={AdminLogin} />
            <PrivateRouteUser path="/profile" component={UserProfile} />
            <Route path="/register" component={UserRegister} />
            <Route
              exact
              path="/admin/login"
              render={() =>
                isAuthenticated && user ? (
                  <Redirect to="/admin/upload" />
                ) : (
                  <AdminLogin />
                )
              }
            />
            <PrivateRouteAdmin path="/admin/profile" component={AdminProfile} />
          </Suspense>
        </ErrorHandler>
      </Switch>
    </Fragment>
  );
};

Routes.propTypes = {
  admin: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  admin: selectCurrentUser,
});

export default connect(mapStateToProps)(Routes);
