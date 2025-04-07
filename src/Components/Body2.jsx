import React, { useState } from "react";
import { Menu } from "lucide-react"; // ✅ Import Menu Icon
import im1 from "../Assect/pro_img1.jpg";
import im2 from "../Assect/pro_img2.png";
import im3 from "../Assect/pro_img3.png";
import im4 from "../Assect/pro_img4.png";
import im5 from "../Assect/pro_Reg.png";
import im6 from "../Assect/pro_curr.png";

export default function Body2() {
    const allProjects = [
        { id: 1, title: "Project 1", description: "This is project 1.", category: "Apps", image: im1 },
        { id: 2, title: "Project 2", description: "This is project 2.", category: "Branding", image: im2 },
        { id: 3, title: "Project 3", description: "This is project 3.", category: "UX/UI", image: im3 },
        { id: 4, title: "Project 4", description: "This is project 4.", category: "UX/UI", image: im4 },
        { id: 5, title: "Project 5", description: "This is project 5.", category: "Login", image: im5 },
        { id: 6, title: "Project 6", description: "This is project 6.", category: "Current Project", image: im6 },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showFilters, setShowFilters] = useState(false); // ✅ State to show/hide filters on mobile

    const filteredProjects =
        selectedCategory === "All"
            ? allProjects
            : allProjects.filter((project) => project.category === selectedCategory);

    const view = (id) => {
        const projectLinks = {
            1: "https://lnkd.in/gxUePgqp",
            2: "https://ashok-leyland-model-clone.vercel.app",
            3: "https://www.figma.com/proto/ZEZFdxTQHaxqKD5uZE3zj6/Untitled?node-id=0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=213%3A2",
            4: "https://www.figma.com/proto/7cSDqs4lf97NlydKqV6CBA/Untitled?node-id=63-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=63%3A2",
            5: "https://sugumarjagadeesh45.github.io/Login_page/login_page.html",
            6: "No link",
        };

        if (projectLinks[id]) {
            window.open(projectLinks[id], "_blank");
        } else {
            alert("No link available for this project.");
        }
    };

    return (
        <section className="bg-black text-white py-16 px-4">
            <div className="max-w-5xl mx-auto" id="Body2">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-8">
                    My Recent Projects
                </h2>

                {/* ✅ MENU BUTTON - Only Visible on Mobile */}
                <div className="flex justify-center md:hidden">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center px-6 py-2 bg-purple-500 text-white rounded-full text-lg font-semibold"
                    >
                        <Menu className="w-6 h-6 mr-2" />
                    </button>
                </div>

                {/* ✅ FILTER BUTTONS - Hidden on Mobile Until Menu Click */}
                <div
                    className={`grid grid-cols-2 gap-2 bg-gray-900 p-2 rounded-lg w-full max-w-xs mx-auto mt-4 md:flex md:justify-center md:gap-4 md:bg-transparent md:max-w-none md:mt-0 transition-all duration-300 ${showFilters ? "grid" : "hidden"
                        } md:block`}
                >
                    {["All", "UX/UI", "Branding", "Apps", "Login", "Current Project"].map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setShowFilters(false); // ✅ Hide filters after selection on mobile
                            }}
                            className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold transition duration-300 text-white text-sm md:text-base ${selectedCategory === category
                                ? "bg-purple-500 shadow-lg shadow-purple-400"
                                : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* ✅ PROJECTS LIST - Now Mobile-Friendly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="relative group overflow-hidden rounded-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-60 md:h-80 object-cover rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                                <h1 className="text-lg md:text-xl font-semibold">{project.title}</h1>
                                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
                                <button
                                    className="mt-4 px-3 py-1 md:px-4 md:py-2 bg-purple-500 text-white rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-105"
                                    onClick={() => view(project.id)}
                                >
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
