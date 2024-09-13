import React from 'react';
import MissionIcon from "../assets/icons/mission.png";
function Mission() {
    return (
        <section>
            <div className="container mx-auto px-4 py-16">
                <img src={MissionIcon} alt="Mission" className="w-32 mx-auto mb-8" />
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Mission</h2>
                <p className="text-center text-gray-700">Help and promote IT architecture knowledge/practices in the information technology community, engage young minds into their career to become future technology leaders.</p>
            </div>
        </section>
    );
}

export default Mission;