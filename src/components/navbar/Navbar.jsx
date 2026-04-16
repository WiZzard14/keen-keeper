import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const activeStyle = ({ isActive }) => 
        `flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl font-bold transition-all ${
            isActive 
            ? "bg-[#2D4A41] text-white shadow-lg scale-105" 
            : "text-gray-500 hover:bg-gray-50" 
        }`;

    return (
        <nav className="navbar bg-white border-b border-gray-100 px-6 md:px-12 py-4 sticky top-0 z-100">
            <div className="flex-1">
                <Link to="/" className="flex items-center gap-2 group">
                    <img src={logo} alt="KeenKeeper Logo" className="btn btn-ghost" />
                </Link>
            </div>

            <div className="flex-none">
                <ul className="flex items-center gap-2 md:gap-4">
                    <li>
                        <NavLink to="/" className={activeStyle}>
                            <i className="fa-solid fa-house"></i>
                            <span className="hidden sm:inline">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline" className={activeStyle}>
                            <i className="fa-solid fa-clock"></i>
                            <span className="hidden sm:inline">Timeline</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={activeStyle}>
                            <i className="fa-solid fa-chart-line"></i>
                            <span className="hidden sm:inline">Stats</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;