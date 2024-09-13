import React from 'react';

const projects = [
    {
        student: "Ameya Sandim",
        university: "Iowa State University",
        degree: "M.S Computer Science",
        mentors: "Parul C, Ankur Rastogi",
        companies: "CoreStack, Amazon",
        project: "Build policies for WAF (well architected frameworks) in AWS. There are about 233 controls for this we need to build policies for various AWS services. Python/JSON expertise will be needed."
    },
    {
        student: "Charchit Shukla",
        university: "Iowa State University",
        degree: "M.S Industrial Engineering",
        mentors: "Michael Sunderland",
        companies: "Costco Wholesale",
        project: "Aggregate usage data and environmental features to compute sustainability metrics for various operating units across the country. This would enable the company to build a dashboard of performance and provide insights into improving the sustainability efforts."
    },
    {
        student: "Chetna Khanna",
        university: "Northeastern University",
        degree: "M.S Data Analytics Engineering",
        mentors: "Parag Kulkarni",
        companies: "Nutanix",
        project: "A project around building a recommendation or guided selling engine as a service that can be plugged into a quoting system that will look at the products been quoted and nudge the quote creator (Sales Rep) towards higher margins and lower discounts. If possible the engine will also provide recommendations around cross-sell and up-sell. The recommendation engine will use attributes like historical sales data, seasonality, sales rep theater/region etc to provide these recommendations."
    },
    {
        student: "Dimple Bapna",
        university: "Northeastern University",
        degree: "M.S Data Analytics Engineering",
        mentors: "Rakesh Malakar",
        companies: "Costco Wholesale",
        project: "N/A"
    },
    {
        student: "Raghuram Anur Srinivas",
        university: "Northeastern University",
        degree: "M.S Data Analytics Engineering",
        mentors: "Parag Kulkarni",
        companies: "Nutanix",
        project: "A project around building a recommendation or guided selling engine as a service that can be plugged into a quoting system that will look at the products been quoted and nudge the quote creator (Sales Rep) towards higher margins and lower discounts. If possible the engine will also provide recommendations around cross-sell and up-sell. The recommendation engine will use attributes like historical sales data, seasonality, sales rep theater/region etc to provide these recommendations."
    },
    {
        student: "Ratnamani Vanisetti",
        university: "University Of Houston",
        degree: "M.S Network Communications",
        mentors: "Parul C, Ankur Rastogi",
        companies: "CoreStack, Amazon",
        project: "Build policies for WAF (well architected frameworks) in AWS. There are about 233 controls for this we need to build policies for various AWS services. Python/JSON expertise will be needed."
    },
    {
        student: "Soumyajeet Patra",
        university: "Northeastern University",
        degree: "M.S Data Analytics Engineering",
        mentors: "Rakesh Malakar",
        companies: "Costco Wholesale",
        project: "N/A"
    },
    {
        student: "Vibhu Sharma",
        university: "University of Dayton",
        degree: "M.S Mechanical Engineering",
        mentors: "Michael Sunderland",
        companies: "Costco Wholesale",
        project: "Aggregate usage data and environmental features to compute sustainability metrics for various operating units across the country. This would enable the company to build a dashboard of performance and provide insights into improving the sustainability efforts."
    },
    {
        student: "Phani Sai Kamal Lingam",
        university: "Northeastern University",
        degree: "M.S Data Analytics Engineering",
        mentors: "Rakesh Malakar",
        companies: "Costco Wholesale",
        project: "N/A"
    }
];

function InternshipProjects() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Internship Projects - Summer 2020</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-2xl">
                            <h3 className="text-xl font-bold mb-2">{project.student}</h3>
                            <p className="text-gray-700 mb-2">{project.university}</p>
                            <p className="text-gray-700 mb-2">{project.degree}</p>
                            <p className="text-gray-700 mb-2"><strong>Mentors:</strong> {project.mentors}</p>
                            <p className="text-gray-700 mb-2"><strong>Companies:</strong> {project.companies}</p>
                            <p className="text-gray-700"><strong>Project:</strong> {project.project}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InternshipProjects;