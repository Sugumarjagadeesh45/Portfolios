import React, { useEffect, useState } from "react";
import figma from "../Assect/figma.png"
import HTML from "../Assect/html.png"
import css from "../Assect/css.png"
import wp from "../Assect/wordpress.png"
import react from "../Assect/react js.png"
import js from "../Assect/js.png"

export default function Body4() {
    const skills = [
        { name: "Figma", percentage: 92, icon: figma },  // ✅ Corrected property name
        { name: "HTML", percentage: 80, icon: HTML },
        { name: "CSS", percentage: 85, icon: css },
        { name: "WordPress", percentage: 99, icon: wp },
        { name: "React", percentage: 89, icon: react },
        { name: "JavaScript", percentage: 93, icon: js },
    ];


    const [progress, setProgress] = useState(Array(skills.length).fill(0));

    useEffect(() => {
        let maxTime = 2000; // 2 seconds animation time
        let steps = 100; // Steps in animation
        let intervalTime = maxTime / steps; // Time per step

        let interval = setInterval(() => {
            setProgress((prev) =>
                prev.map((_, index) =>
                    Math.min(prev[index] + skills[index].percentage / steps, skills[index].percentage)
                )
            );
        }, intervalTime);

        setTimeout(() => clearInterval(interval), maxTime);
    }, []);

    return (
        <div id="Body4" className="bg-black text-white py-10 text-center">
            <h2 className="text-4xl font-bold text-purple-400">My Skills</h2>
            <p className="mt-3 text-gray-400">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>

            {/* Skills Grid - Each skill is inside its own separate div */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg text-center transition-all duration-300 hover:bg-purple-600 hover:text-white w-36"
                    >
                        {/* Separate Icon */}
                        <div className="mb-2">
                            <img src={skill.icon} alt={skill.name} className="w-12 mx-auto opacity-60 group-hover:opacity-100" />
                        </div>

                        {/* Separate Name */}
                        <div>
                            <p className="text-purple-400 text-lg font-semibold">{skill.name}</p>
                        </div>

                        {/* Separate Percentage */}
                        <div>
                            <p className="text-gray-400 mt-1 group-hover:text-white">{skill.percentage}%</p>
                        </div>

                        {/* Separate Progress Bar */}
                        <div className="w-full bg-gray-700 rounded-full h-4 mt-2 overflow-hidden">
                            <div
                                className="h-4 rounded-full"
                                style={{
                                    width: `${progress[index]}%`,
                                    background: "repeating-linear-gradient(-45deg, #9333ea 0%, #9333ea 25%, #a855f7 25%, #a855f7 50%)",
                                    backgroundSize: "40px 40px",
                                    animation: "moveStripes 1s linear infinite"
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Striped Animation Keyframes */}
            <style>
                {`
                    @keyframes moveStripes {
                        from { background-position: 0 0; }
                        to { background-position: 40px 0; }
                    }
                `}
            </style>
        </div>
    );
}
