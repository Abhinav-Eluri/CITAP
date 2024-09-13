import React from 'react';
import { Transition } from '@headlessui/react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Overlay for mobile when sidebar is open */}
            <Transition
                show={isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            </Transition>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50 w-64 bg-white shadow-lg`}
            >
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="mt-7 font-serif">
                    <ul className="p-4 space-y-8">
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="/">Home</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#settings">SITAC</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#profile">SITAC - Past Events</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="#logout">Webinars</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="/internship">Internship-Projects</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="/about">About Us</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <a href="/join">Join Us</a>
                        </li>

                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
