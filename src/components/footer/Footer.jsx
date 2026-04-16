import React from 'react';
import logo from '../assets/logo-xl.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#2D4A41] text-white pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <img src={logo} alt="KeenKeeper Logo" className="h-12 w-auto object-contain" />
                </div>
                
                <p className="text-gray-300 max-w-lg mx-auto mb-8 text-sm">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                <div className="mb-12">
                    <p className="font-bold mb-4">Social Links</p>
                    <div className="flex justify-center gap-6">
                        <img 
                            src={instagram} 
                            alt="Instagram" 
                            className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" 
                        />
                        <img 
                            src={facebook} 
                            alt="Facebook" 
                            className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" 
                        />
                        <img 
                            src={twitter} 
                            alt="Twitter" 
                            className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" 
                        />
                    </div>
                </div>

                <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;