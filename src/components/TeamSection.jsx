import React from 'react';
import Brenda from '../assets/images/members/brenda.jpg';
import Jennie from '../assets/images/members/jennie.jpeg';
import Nataliya from '../assets/images/members/nataliya.jpg';
import Prasad from '../assets/images/members/prasad.png';
import Samir from '../assets/images/members/samir.png';
import Sanjay from '../assets/images/members/sanjay.png';
import Sashank from '../assets/images/members/sashank.png';
import SekharJoshi from '../assets/images/members/sekharjoshi.png';
import Shrikant from '../assets/images/members/shrikant.jpg';
const TeamSection = () => {
    return (
        <section id="our-team" className="bg-gray-100 py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Shrikant}
                            alt="Team Member 8"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Shrikant Palkar</h3>
                        <p className="text-gray-700">Costco</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Brenda}
                            alt="Team Member 1"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Brenda Spilker</h3>
                        <p className="text-gray-700">Independent</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Nataliya} alt="Team Member 2"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Nataliya Bobrovnyk</h3>
                        <p className="text-gray-700">F5</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Jennie}
                            alt="Team Member 3"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Jennie Wang</h3>
                        <p className="text-gray-700">Microsoft</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Prasad}
                            alt="Team Member 4"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Durga Prasad Tavva</h3>
                        <p className="text-gray-700">TrueBlue</p>
                    </div>


                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Samir}
                            alt="Team Member 6"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Samir Shilamkar</h3>
                        <p className="text-gray-700">Google</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Sanjay}
                            alt="Team Member 7"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Sanjay Buradkar</h3>
                        <p className="text-gray-700">Lululemon</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={Sashank}
                            alt="Team Member 8"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Sashank Tamhane</h3>
                        <p className="text-gray-700">Costco</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                        <img
                            src={SekharJoshi}
                            alt="Team Member 8"
                            className="w-full rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Shekhar Joshi
                        </h3>
                        <p className="text-gray-700">Expedia</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default TeamSection;
