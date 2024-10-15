import { Link } from 'react-router-dom';
import "./Sidebar.css"; // Assuming you have a separate CSS fil
import logo from "../../../assets/CO-LOGO.webp"

const Sidebar = ({  sidebar }) => {
    return (
        <nav className={sidebar ? "close" : "open"} onChange={(e) => setSidebar(e.target.value)}>
            <div className="logo-name">
                <div className="logo-image">
                    <img src={logo} alt="" />
                </div>
                {/* <span className="logo_name">Conduct Science</span> */}

            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            <i className="uil uil-estate" />
                            <span className="link-name">Dahsboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <i className="uil uil-shopping-cart-alt" />
                            <span className="link-name">My Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/quotes"} >
                            <i className="uil uil-copy-landscape" />
                            <span className="link-name">My Quotes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/licenses"} >
                            <i className="uil uil-key-skeleton" />
                            <span className="link-name">License Keys</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <i className="uil uil-setting" />
                            <span className="link-name">Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subscriptions">
                            <i className="uil uil-files-landscapes-alt" />
                            <span className="link-name">Subscriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/payment">
                            <i className="uil uil-dollar-alt" />
                            <span className="link-name">Payment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/support">
                            <i className="uil uil-envelope-question" />
                            <span className="link-name">Support</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/membership">
                            <i className="uil uil-smile" />
                            <span className="link-name">Membership</span>
                        </Link>
                    </li>
                </ul>
                {/* <ul class="logout-mode">
                    <li><a href="#">
                        <i class="uil uil-signout"></i>
                        <span class="link-name">Logout</span>
                    </a></li>

                    <li class="mode">
                        <a href="#">
                            <i class="uil uil-moon"></i>
                            <span class="link-name">Dark Mode</span>
                        </a>

                        <div class="mode-toggle" onClick={handlerDark} onChange={() => setDarkMode(e.target.value)}>
                            <span class="switch"></span>
                        </div>
                    </li>
                </ul> */}
            </div>
        </nav>
    );
};

export default Sidebar;
