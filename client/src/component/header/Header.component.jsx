import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header = () => (
  <header id="topnav" className="defaultscroll sticky">
    <div className="container">
      <div>
        <Link className="logo" to="/">
          <img src={logo} className="l-light" height="24" alt="" />
        </Link>
      </div>
      <div className="buy-button">
        <Link to="/login">
          <div className="btn btn-light login-btn-light">Login</div>
        </Link>
      </div>

      <div className="menu-extras">
        <div className="menu-item">
          <a href="#!" className="navbar-toggle">
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>

      {/* <div id="navigation">
            
            <ul className="navigation-menu nav-light">
                <li><a href="index.html">Home</a></li>
                <li className="has-submenu">
                    <a href="#!">Landing</a><span className="menu-arrow"></span>
                    <ul className="submenu megamenu">
                        <li>
                            <ul>
                                <li><a href="index-saas.html">Saas</a></li>
                                <li><a href="index-classic-saas.html">Classic Saas</a></li>
                                <li><a href="index-agency.html">Agency</a></li>
                                <li><a href="index-apps.html">Application</a></li>
                                <li><a href="index-classic-app.html">Classic Application</a></li>
                                <li><a href="index-studio.html">Studio</a></li>
                                <li><a href="index-business.html">Business</a></li>
                                <li><a href="index-modern-business.html">Modern Business</a></li>
                                <li><a href="index-hotel.html">Hotel</a></li>
                                <li><a href="index-marketing.html">Marketing</a></li>
                                <li><a href="index-enterprise.html">Enterprise</a></li>
                                <li><a href="index-insurance.html">Insurance</a></li>
                                <li><a href="index-shop.html">Shop</a></li>
                                <li><a href="index-coworking.html">Coworking</a></li>
                            </ul>
                        </li>

                        <li>
                            <ul>
                                <li><a href="index-it-solution.html">IT Solution <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-corporate.html">Corporate Business<span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-task-management.html">Task Management <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-email-inbox.html">Email Inbox <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-landing-one.html">Landing One <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-landing-two.html">Landing Two <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-landing-three.html">Landing Three <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-travel.html">Travel <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-blog.html">Blog <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="forums.html">Forums <span className="badge badge-danger rounded">v2.5</span></a></li>
                                <li><a href="index-personal.html">Personal</a></li>
                                <li><a href="index-services.html">Service</a></li>
                                <li><a href="index-payments.html">Payments</a></li>
                                <li><a href="index-crypto.html">Cryptocurrency</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="index-course.html">Course</a></li>
                                <li><a href="index-online-learning.html">Online Learning</a></li>
                                <li><a href="index-hosting.html">Hosting & Domain</a></li>
                                <li><a href="index-event.html">Event</a></li>
                                <li><a href="index-single-product.html">Product</a></li>
                                <li><a href="index-portfolio.html">Portfolio</a></li>
                                <li><a href="index-job.html">Job</a></li>
                                <li><a href="index-social-marketing.html">Social Media</a></li>
                                <li><a href="index-digital-agency.html">Digital Agency</a></li>
                                <li><a href="index-car-riding.html">Car Ride</a></li>
                                <li><a href="index-customer.html">Customer</a></li>
                                <li><a href="index-software.html">Software</a></li>
                                <li><a href="index-ebook.html">E-Book</a></li>
                                <li><a href="index-onepage.html">Saas <span className="badge badge-pill badge-warning ml-2">Onepage</span></a></li>
                            </ul>
                        </li>   
                    </ul>
                </li>

                <li className="has-submenu">
                    <a href="#!">Pages</a><span className="menu-arrow"></span>
                    <ul className="submenu">
                        <li className="has-submenu"><a href="#!"> Company <span className="badge badge-primary rounded">Added</span></a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-aboutus.html"> About Us</a></li>
                                <li><a href="page-aboutus-two.html"> About Us Two <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="page-services.html">Services</a></li>
                                <li><a href="page-history.html">History <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="page-team.html"> Team</a></li>
                                <li><a href="page-pricing.html">Pricing</a></li>
                            </ul> 
                        </li>
                        <li className="has-submenu"><a href="#!"> Account <span className="badge badge-primary rounded">Added</span></a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="account-profile.html">Profile</a></li>
                                <li><a href="account-members.html">Members <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="account-works.html">Works <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="account-messages.html">Messages <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="account-payments.html">Payments <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="account-setting.html">Setting</a></li>
                                <li><a href="page-invoice.html">Invoice</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Shop </a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="shop-products.html">All Products</a></li>
                                <li><a href="shop-product-detail.html">Product Details</a></li>
                                <li><a href="shop-cart.html">Shop Cart</a></li>
                                <li><a href="shop-checkouts.html">Checkouts</a></li>
                                <li><a href="shop-myaccount.html">My Account</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Help center </a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="helpcenter-overview.html">Helpcenter</a></li>
                                <li><a href="helpcenter-faqs.html">Faqs</a></li>
                                <li><a href="helpcenter-guides.html">Guides</a></li>
                                <li><a href="helpcenter-support-request.html">Support Call</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Forums <span className="badge badge-danger rounded">v2.5</span></a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="forums.html">Overview <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="forums-topic.html">Forum Topic <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="forums-comments.html">Forum Comments <span className="badge badge-success rounded">New</span></a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Email Template</a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="email-confirmation.html">Confirmation</a></li>
                                <li><a href="email-password-reset.html">Reset Password</a></li>
                                <li><a href="email-alert.html">Alert</a></li>
                                <li><a href="email-invoice.html">Invoice</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!">Careers</a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-jobs.html">Jobs</a></li>
                                <li><a href="page-jobs-sidebar.html">Jobs - Sidebar</a></li>
                                <li><a href="page-job-detail.html">Job Detail</a></li>
                                <li><a href="page-job-apply.html">Job Apply</a></li>
                                <li><a href="page-job-company.html">Company</a></li>
                                <li><a href="page-job-candidate.html">Candidate</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Blog <span className="badge badge-primary rounded">Added</span></a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-blog-grid.html">Blog Grid</a></li>
                                <li><a href="page-blog-sidebar.html">Blog with Sidebar</a></li>
                                <li><a href="page-blog-list.html">Blog Listing</a></li>
                                <li><a href="page-blog-list-sidebar.html">Blog List & Sidebar</a></li>
                                <li><a href="page-blog-detail.html">Blog Detail</a></li>
                                <li><a href="page-blog-detail-two.html">Blog Detail 2 <span className="badge badge-success rounded">New</span></a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Case Study <span className="badge badge-danger rounded">v2.5</span></a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-cases.html">All Cases <span className="badge badge-success rounded">New</span></a></li>
                                <li><a href="page-case-detail.html">Case Detail <span className="badge badge-success rounded">New</span></a></li>
                            </ul>
                        </li>
                        <li className="has-submenu"><a href="#!"> Works</a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-work-modern.html">Works Modern</a></li>
                                <li><a href="page-work-classic.html">Works Classic</a></li>
                                <li><a href="page-work-grid.html">Works Grid</a></li>
                                <li><a href="page-work-masonry.html">Works Masonry</a></li>
                                <li><a href="page-work-detail.html">Work Detail</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Auth Pages</a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="auth-login.html">Login</a></li>
                                <li><a href="auth-cover-login.html">Login Cover</a></li>
                                <li><a href="auth-login-three.html">Login Simple</a></li>
                                <li><a href="auth-signup.html">Signup</a></li>
                                <li><a href="auth-cover-signup.html">Signup Cover</a></li>
                                <li><a href="auth-signup-three.html">Signup Simple</a></li>
                                <li><a href="auth-re-password.html">Reset Password</a></li>
                                <li><a href="auth-cover-re-password.html">Reset Password Cover</a></li>
                                <li><a href="auth-re-password-three.html">Reset Password Simple</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Utility </a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-terms.html">Terms of Services</a></li>
                                <li><a href="page-privacy.html">Privacy Policy</a></li>
                            </ul>  
                        </li>
                        <li className="has-submenu"><a href="#!"> Special </a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-comingsoon.html">Coming Soon</a></li>
                                <li><a href="page-comingsoon2.html">Coming Soon Two</a></li>
                                <li><a href="page-maintenance.html">Maintenance</a></li>
                                <li><a href="page-error.html">Error</a></li>
                            </ul>
                        </li>
                        <li className="has-submenu"><a href="#!"> Contact </a><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="page-contact-detail.html">Contact Detail</a></li>
                                <li><a href="page-contact-one.html">Contact One</a></li>
                                <li><a href="page-contact-two.html">Contact Two</a></li>
                                <li><a href="page-contact-three.html">Contact Three</a></li>
                            </ul>  
                        </li>
                    </ul>
                </li>
                <li className="has-submenu">
                    <a href="#!">Docs</a><span className="menu-arrow"></span>
                    <ul className="submenu">
                        <li><a href="documentation.html">Documentation</a></li>
                        <li><a href="changelog.html">Changelog</a></li>
                        <li><a href="components.html">Components</a></li>
                        <li><a href="widget.html">Widget</a></li>
                    </ul>
                </li>
            </ul>
            <div className="buy-menu-btn d-none">
                <a href="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary">Buy Now</a>
            </div>
        </div> */}
    </div>
  </header>
);

export default Header;
