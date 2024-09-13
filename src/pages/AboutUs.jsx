import React from 'react';
import TeamSection from "../components/TeamSection.jsx";
import Mission from "../components/Mission.jsx";
import WhatWeDo from "../components/WhatWeDo.jsx";
import Contact from "../components/Contact.jsx";

function AboutUs() {
    return (
        <div data-theme="cupcake">
         <Mission />
         <WhatWeDo />
        <TeamSection />
         <Contact />
        </div>
    );
}

export default AboutUs;