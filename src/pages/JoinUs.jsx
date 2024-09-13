import React from 'react';

function JoinUs() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-center mb-8 text-primary">Join Us</h2>
                <p className="text-center text-gray-700 mb-8">
                    IT Architecture is an evolving profession and we are always looking for professionals eager to contribute to the community. There are multiple ways to contribute. You can help organize, build templates and artifact models, become a mentor, or help with sponsorship.
                </p>
                <p className="text-center font-serif text-gray-700 mb-8">
                    Please contact <a href="mailto:volunteer@iitarch.org" className="text-blue-500 underline">volunteer@iitarch.org</a> indicating your area of interest or fill out and submit the form below. We look forward to hearing from you.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://forms.gle/2JcQANEZr6wJrxzp6" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Mentor Signup Form</a>
                    <a href="https://forms.gle/nh7wMcXSw2thQKZ9A" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Volunteer Signup Form</a>
                </div>
            </div>
        </section>
    );
}

export default JoinUs;