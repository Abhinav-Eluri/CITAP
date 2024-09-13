import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import JoinUs from "./pages/JoinUs.jsx";
import Internship from "./pages/Internship.jsx";

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Main content */}
            <div className="flex flex-1">
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1 flex flex-col">
                    <NavBar toggleSidebar={toggleSidebar} />
                    <main className="flex-1 w-full p-4">
                        <Routes>
                            <Route path="" element={<Home />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/join" element={<JoinUs />} />
                            <Route path="/internship" element={<Internship />} />
                        </Routes>
                    </main>
                </div>
            </div>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
}

export default App;
