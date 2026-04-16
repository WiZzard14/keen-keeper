import React from 'react';

const NotFound = ({ setPage }) => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-[12rem] font-black text-[#2D4A41] opacity-10 leading-none select-none">
                404
            </h1>
            
            <div className="-mt-16 relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                    It looks like the friendship you're looking for moved to a different 
                    neighborhood. Let's get you back to your circle.
                </p>

                <button 
                    onClick={() => setPage('home')}
                    className="btn bg-[#2D4A41] hover:bg-[#1f352e] text-white border-none px-10 rounded-xl shadow-lg transition-all transform hover:scale-105"
                >
                    Back to Home
                </button>
            </div>
            
            <div className="mt-12 flex gap-4 opacity-20 text-4xl">
                <span>🏠</span>
                <span>🔍</span>
                <span>📍</span>
            </div>
        </div>
    );
};

export default NotFound;