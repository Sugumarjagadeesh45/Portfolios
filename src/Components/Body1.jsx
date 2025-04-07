import React from "react";
import { ArrowRight } from "lucide-react"; // For icons

export default function Body1() {
    const services = [
        {
            id: "01",
            title: "Web Development",
            description:
                "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
        },
        {
            id: "02",
            title: "UI/UX Design",
            description:
                "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
        },
        {
            id: "03",
            title: "Content Writing",
            description:
                "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and automation.",
        },
        {
            id: "04",
            title: "Digital Marketing",
            description:
                "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
        },
    ];

    return (
        <section className="text-white bg-black py-16">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-purple-400">
                    My Quality Services
                </h2>
                <p className="text-center text-gray-400 mt-3">
                    We put your ideas and wishes in the form of a unique web project that
                    inspires you and your customers.
                </p>

                {/* Services List */}
                <div className="mt-10 space-y-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-lg border border-gray-700 transition-all duration-[2000ms] hover:bg-purple-600 hover:text-white flex justify-between items-center cursor-pointer"
                        >
                            <div>
                                <span className="text-purple-400 font-bold text-lg">
                                    {service.id}
                                </span>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                            {/* Rotate the arrow in 2 seconds */}
                            <ArrowRight className="text-white transition-transform duration-[200ms] group-hover:rotate-180" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
