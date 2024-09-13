import React from 'react';
import GoalIcon from "../assets/icons/goal.png";
function WhatWeDo() {
    return (
        <section>
            <div className="container mx-auto px-4 py-16">
                <img src={GoalIcon} className={"w-32 mx-auto mb-8"} alt="Goal" />
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">What we do</h2>
                <p className="text-center text-gray-700">CITAP is a 501(c)(3)  registered non-profit organization. We are a group of volunteers passionate about IT  architecture and strive to promote the art and skill into the student community to help develop technology leaders of the future. We do this by engaging with the student community through various events and programs designed specifically with student audience in mind.</p>
            </div>
        </section>
    );
}

export default WhatWeDo;