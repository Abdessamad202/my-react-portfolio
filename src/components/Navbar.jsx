import { Link, useLocation } from "react-router-dom";
import {navItems} from "../data/navData.js";
const Navbar = () => {
    const location = useLocation(); // Get the current URL path



    return (
        <div className="nav-container">
            {navItems.map((item, index) => (
                <Link
                    to={item.path}
                    key={index}
                    className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                    <i className={item.icon}></i>
                    <div className="tooltip">{item.tooltip}</div>
                </Link>
            ))}
        </div>
    );
};

export { Navbar };
