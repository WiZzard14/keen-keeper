import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = ({ currentPage, setPage }) => {
    return (
        <nav className="navbar bg-white border-b border-gray-100 px-4 md:px-12 py-4 sticky top-0 z-[100]">
            <div className="flex-1">
                <div 
                    className="flex items-center gap-2 cursor-pointer group" 
                    onClick={() => setPage('home')}
                >
                    <img src={logo} alt="Logo" className="btn btn-ghost" />
                </div>
            </div>

            <div className="flex-none">
                <ul className="flex items-center gap-1 md:gap-4 font-medium">
                    <li>
                        <button 
                            onClick={() => setPage('home')}
                            className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-xl transition-all ${
                                currentPage === 'home' 
                                ? "bg-[#2D4A41] text-white shadow-lg" 
                                : "text-gray-500 hover:bg-gray-50"
                            }`}
                        >
                            <span className="text-lg"><i className="fa-solid fa-house"></i></span>
                            <span className="text-sm md:text-base hidden sm:inline">Home</span>
                        </button>
                    </li>

                    <li>
                        <button 
                            onClick={() => setPage('timeline')}
                            className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-xl transition-all ${
                                currentPage === 'timeline' 
                                ? "bg-[#2D4A41] text-white shadow-lg" 
                                : "text-gray-500 hover:bg-gray-50"
                            }`}
                        >
                            <span className="text-lg"><i className="fa-solid fa-clock"></i></span>
                            <span className="text-sm md:text-base hidden sm:inline">Timeline</span>
                        </button>
                    </li>

                    {/* Stats Link */}
                    <li>
                        <button 
                            onClick={() => setPage('stats')}
                            className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-xl transition-all ${
                                currentPage === 'stats' 
                                ? "bg-[#2D4A41] text-white shadow-lg" 
                                : "text-gray-500 hover:bg-gray-50"
                            }`}
                        >
                            <span className="text-lg"><i className="fa-solid fa-chart-line"></i></span>
                            <span className="text-sm md:text-base hidden sm:inline">Stats</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar