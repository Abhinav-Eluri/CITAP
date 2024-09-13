import React from 'react';
import CitapLogo from "../assets/images/citaplogo.jpg";
const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            {/* Hamburger Menu for all screen sizes */}
            <button
                className="p-2 text-gray-500 focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Title or Dashboard label */}
            <img src={CitapLogo} alt={ "CITAP Logo"} className="w-16 h-16" />
            <div className="text-2xl font-semibold text-gray-700 flex-1 text-center md:text-left">
                CITAP
            </div>

            {/* Profile Icon */}
            <div className="block">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </header>
    );
};

export default Navbar;
