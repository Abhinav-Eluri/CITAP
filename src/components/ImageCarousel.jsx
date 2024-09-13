import React, { useState, useEffect } from 'react';
import Winner1 from '../assets/images/winner1.png';
import Winner2 from '../assets/images/winner2.png';
import Winner3 from '../assets/images/winner3.png';

const images = [
    Winner1,
    Winner2,
    Winner3
];

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative w-full h-3/4 rounded-2xl overflow-hidden mt-20 p-8">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
}

export default ImageCarousel;