import React, { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa6";
import profileimg from "../Assect/profile-img.png";
import PDF from '../Assect/Resume.pdf'

export default function Header() {
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [happyClients, setHappyClients] = useState(0);
    const [blobPath, setBlobPath] = useState("");

    const animateCountUp = (setState, start, end, duration) => {
        let current = start;
        const range = end - start;
        const increment = Math.ceil(range / (duration / 50));
        const interval = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(interval);
            }
            setState(current);
        }, 50);
    };

    useEffect(() => {
        animateCountUp(setYearsOfExperience, 0, 1, 5000);
        animateCountUp(setProjectsCompleted, 0, 10, 5000);
        animateCountUp(setHappyClients, 0, 0, 5000);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const generateSmoothBlobPath = () => {
            const points = 12;
            const radius = 0.4;
            const variation = 0.04;
            const angleStep = (Math.PI * 2) / points;
            const coordinates = [];

            for (let i = 0; i < points; i++) {
                const angle = i * angleStep;
                const r = radius + (Math.random() * variation - variation / 2);
                const x = 0.5 + Math.cos(angle) * r;
                const y = 0.5 + Math.sin(angle) * r;
                coordinates.push({ x, y });
            }

            let path = `M${coordinates[0].x},${coordinates[0].y} `;

            for (let i = 0; i < points; i++) {
                const curr = coordinates[i];
                const next = coordinates[(i + 1) % points];
                const cx = (curr.x + next.x) / 2;
                const cy = (curr.y + next.y) / 2;
                path += `Q${curr.x},${curr.y} ${cx},${cy} `;
            }

            path += "Z";
            return path;
        };

        setBlobPath(generateSmoothBlobPath());
    }, []);

    return (
        <div className="bg-[#0a0214] text-white min-h-screen flex flex-col items-center px-4 md:px-16">
            <header className="w-full flex justify-between items-center py-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">SJ</h1>
                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg font-medium">
                    <a href="#">Services</a>
                    <a href="#Body2" onClick={(e) => { e.preventDefault(); scrollToSection("Body2"); }}>Projects</a>
                    <a href="#Body3" onClick={(e) => { e.preventDefault(); scrollToSection("Body3"); }}>Works</a>
                    <a href={PDF} >Resume</a>
                    <a href="#Body4" onClick={(e) => { e.preventDefault(); scrollToSection("Body4"); }}>Skills</a>
                    <a href="#Body5" onClick={(e) => { e.preventDefault(); scrollToSection("Body5"); }}>Contact</a>
                </nav>
                <button className="bg-gradient-to-r from-purple-500 to-purple-700 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:shadow-lg transition">
                    Hire Me!
                </button>
            </header>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-10 md:mt-20 gap-10">
                <div className="text-center md:text-left max-w-xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 tracking-wide">
                        I'm SUGUMAR JAGADEESH
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-400 mt-4 leading-snug">
                        Entry-Level <br /> Web Developer.
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
                        I break down complex user experience problems to create integrity-focused solutions
                        that connect billions of people.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
                        <a href={PDF}  ><button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">
                            Download CV
                        </button></a>




                        <div className="flex gap-4 text-xl">
                            <a href="https://wa.me/qr/ZRMYO6O7Y4NPH1" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <FaGoogle />
                            </a>
                            <a href="https://www.linkedin.com/in/sugumar-jagadeesh-m-9bb6a7239/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Responsive Smooth Curved Blob */}
                <div className="relative w-[60vw] max-w-[350px] h-[70vw] max-h-[500px]">
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                        <defs>
                            <clipPath id="dynamic-blob" clipPathUnits="objectBoundingBox">
                                <path d={blobPath} />
                            </clipPath>
                        </defs>
                    </svg>
                    <div
                        className="bg-purple-600 flex items-center justify-center mx-auto"
                        style={{
                            clipPath: `url(#dynamic-blob)`,
                            overflow: 'hidden',
                            height: "100%",
                            width: "100%",
                            boxShadow: "0 0 50px rgba(110, 60, 203, 0.5)",
                            transition: "all 0.3s ease-in-out"
                        }}
                    >
                        <img
                            src={profileimg}
                            alt="Profile"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 text-center text-white mt-16 gap-8">
                <div>
                    <p className="text-4xl md:text-5xl font-bold">{yearsOfExperience}</p>
                    <p className="text-sm md:text-lg text-gray-300">Years of Experience</p>
                </div>
                <div>
                    <p className="text-4xl md:text-5xl font-bold">{projectsCompleted}+</p>
                    <p className="text-sm md:text-lg text-gray-300">Projects Completed</p>
                </div>
                <div>
                    <p className="text-4xl md:text-5xl font-bold">{happyClients.toLocaleString()}</p>
                    <p className="text-sm md:text-lg text-gray-300">Happy Clients</p>
                </div>
            </div>
        </div>
    );
}
