import React from 'react';

function About() {
    return (
        <section className="flex w-full h-auto flex-col space-y-8 gap-4 justify-center py-12 px-4">
            <h1 className="text-center text-4xl font-bold ">
                About SITAC
            </h1>
            <p className="w-full lg:w-2/3 xl:w-1/2 mx-auto text-center text-lg font-normal leading-relaxed">
                "An architect is like an airline pilot, who might not look busy all of the time but uses decades of
                experience to constantly monitor the situation, taking immediate action if they see or hear something
                out of the ordinary."

                A group of senior IT professionals got together in 2015 to create a competition that is a one-of-a-kind
                opportunity for undergraduate and graduate students.

                The experience of the past several years of the competition has shown that it adds valuable job skills
                to the student's repertoire. Teams compete to develop an architectural solution for a real-world problem,
                guided by practicing professionals from the industry.

                Visit the SITAC Past Events and Media Gallery pages for a peek into previous years' competitions.
            </p>
        </section>
    );
}

export default About;
