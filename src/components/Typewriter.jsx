import React, { useState, useEffect, useMemo } from "react";
import Books from "../assets/images/alexander-grey-eMP4sYPJ9x0-unsplash.jpg";

const Typewriter = () => {
    const words = useMemo(
        () => ["COMMUNITY OF INFORMATION TECHNOLOGY ARCHITECTURE PRACTITIONERS"],
        []
    );

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[index];
        const timeout = setTimeout(() => {
            setSubIndex((prev) => {
                if (prev < currentWord.length) {
                    return prev + 1; // Continue typing
                } else {
                    setTimeout(() => {
                        setIndex((prev) => (prev + 1) % words.length); // Move to next word
                        setSubIndex(0); // Reset subIndex for the new word
                    }, 1000); // Adjust the delay before moving to the next word
                    return prev; // Keep the full word displayed
                }
            });
        }, 300); // Adjust typing speed

        return () => clearTimeout(timeout);
    }, [subIndex, index, words]);

    return (
        <section className="w-full h-full flex flex-col space-y-6 justify-center items-center">
            <div
                className="relative w-full h-full overflow-hidden rounded-lg bg-cover bg-no-repeat text-center"
                style={{
                    backgroundImage: `url(${Books})`,
                    height: "100%", // Full height for the background image
                }}
            >
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white space-y-9">
                            <h1
                                id="typewriter"
                                style={{ lineHeight: "1.5em" }}
                                className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-white px-5"
                            >
                                {`${words[index].substring(0, subIndex)}`}
                            </h1>
                            <h1 className="text-md font-bold text-white mt-4">
                                RECOGNIZING AND PROMOTING THE ART AND SCIENCE OF ITS ARCHITECTURE
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Typewriter;
