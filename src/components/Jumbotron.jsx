import React from 'react';
import InternshipImage from "../assets/images/internship.jpg";
function Jumbotron(props) {
    return (
        <div
            className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
            style={{ backgroundImage: `url(${InternshipImage})`, height: '400px',backgroundSize:'cover' }}>>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                        <h2 className="mb-4 text-6xl font-serif">INTERNSHIP</h2>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Jumbotron;



