import React from "react";

export default function Body3() {
    const experience = [
        { year: "2024 - Present", title: "Full-Stact Developer Course", place: "SAN Solution, Erode" },
        { year: "2024 - 2024", title: "UX/UI Design Studio", place: "Pep Softwares, Erode" },
        { year: "2023 - 2024", title: "Sales Executive", place: "Axis Bank, Erode" },
    ];

    const education = [
        { year: "2029 - 2023", title: "B.E Computer Science and Engineering", place: "Surya Engineering College, Erode" },
        { year: "2018 - 2019", title: "12ᵗʰ", place: "M.P.D GOVT. HSC. SCHOOL, Thingalur-638055" },
        { year: "2016 - 2017", title: "10ᵗʰ", place: "M.P.D GOVT. HSC. SCHOOL, Thingalur-638055" },
    ];

    return (
        <div className="bg-black text-white py-10 px-5 md:px-20" id="Body3">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Experience Section */}
                <div>
                    <h2 className="text-3xl font-bold text-purple-400 mb-5">My Experience</h2>
                    <div className="space-y-4">
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-5 rounded-lg transition duration-300 hover:bg-purple-600"
                            >
                                <p className="text-purple-300 font-semibold">{exp.year}</p>
                                <h3 className="text-xl font-bold">{exp.title}</h3>
                                <p className="text-gray-400">{exp.place}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <h2 className="text-3xl font-bold text-purple-400 mb-5">My Education</h2>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-5 rounded-lg transition duration-300 hover:bg-purple-600"
                            >
                                <p className="text-purple-300 font-semibold">{edu.year}</p>
                                <h3 className="text-xl font-bold">{edu.title}</h3>
                                <p className="text-gray-400">{edu.place}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
