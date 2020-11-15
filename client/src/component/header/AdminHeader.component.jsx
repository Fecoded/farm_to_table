import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/admin/admin.selectors";
import { loadAdmin, logout } from "../../redux/admin/admin.actions";
import logo from "../../assets/logo.jpg";

const Header = ({ admin: { isAuthenticated }, loadAdmin, logout }) => {
  useEffect(() => {
    loadAdmin();
  }, [loadAdmin]);

  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <div>
          <Link className="logo" to="/">
            <img src={logo} className="l-dark" height="24" alt="" />
            <img src={logo} className="l-light" height="24" alt="" />
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="buy-button">
            <Link to="#!" onClick={() => logout()}>
              <div className="btn btn-light login-btn-light">Logout</div>
            </Link>
          </div>
        ) : (
          <div className="buy-button">
            <Link to="/login">
              <div className="btn btn-light login-btn-light">Login</div>
            </Link>
          </div>
        )}

        <div className="menu-extras">
          <div className="menu-item">
            {/*  eslint-disable-next-line  */}
            <div className="navbar-toggle">
              <div className="navlink">
                <ul className="">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="/product">Products</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="has-submenu">
              <Link to="#!">Products</Link>
              <span className="menu-arrow"></span>
              <ul className="submenu megamenu">
                <li>
                  <ul>
                    <li>
                      <Link to="/standard">Standard</Link>
                    </li>
                    <li>
                      <Link to="/classic">Classic</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  admin: selectCurrentUser,
});

export default connect(mapStateToProps, { loadAdmin, logout })(Header);
