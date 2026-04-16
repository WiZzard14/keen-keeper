import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = ({ currentPage, setPage }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-12">
            <div className="flex-1">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
                    <img src={logo} alt="Logo" className="btn" />
                </div>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-2 font-medium">
                    <li>
                        <button 
                            onClick={() => setPage('home')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                                currentPage === 'home' ? "bg-[#2D4A41] text-white" : "text-gray-600"
                            }`}
                        >
                            <span><i class="fa-solid fa-house"></i></span>
                            <span>Home</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setPage('timeline')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                                currentPage === 'timeline' ? "bg-[#2D4A41] text-white" : "text-gray-600"
                            }`}
                        >
                            <span><i class="fa-regular fa-clock"></i></span>
                            <span>Timeline</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setPage('stats')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                                currentPage === 'stats' ? "bg-[#2D4A41] text-white" : "text-gray-600"
                            }`}
                        >
                            <span><i class="fa-solid fa-chart-line"></i></span>
                            <span>Stats</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar