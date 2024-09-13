import Typewriter from "../components/Typewriter.jsx";
import About from "../components/About.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import React from "react";
const Home = () => {
    return (
        <div className="w-full h-screen overflow-auto">
            <Typewriter/>
            <h1 className="text-center w-full mt-20 text-4xl text-primary">Winners</h1>

            <ImageCarousel/>
            <About/>
        </div>
    );
};

export default Home;
