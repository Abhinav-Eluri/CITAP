import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 w-full">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> |
                    <a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
