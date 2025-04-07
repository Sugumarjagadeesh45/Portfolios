import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

// Reusable Contact Info Component
const ContactInfo = ({ icon, text, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 text-gray-400 hover:text-white transition text-lg md:text-xl"
    >
        <div className="text-purple-400 text-3xl md:text-4xl">{icon}</div>
        <p className="text-lg md:text-2xl break-words">{text}</p>
    </a>
);

const Body5 = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        option: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send("service_j27yzso", "template_hzsxu6e", formData, "jWw2uWYiwIYxnEaHg")
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        contact: "",
                        option: "",
                        message: "",
                    });
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div id="Body5" className="bg-black text-white py-12 px-4 md:py-16 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                {/* Left - Contact Form */}
                <div className="relative z-10 flex items-center justify-center">
                    <div className="bg-[#181218] p-6 md:p-10 rounded-lg w-full h-full flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-400">Let's work together!</h2>
                        <p className="mt-3 text-gray-400 text-sm md:text-base">
                            I design and code beautifully simple things, and I love what I do. Just simple like that!
                        </p>

                        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="firstName" value={formData.firstName} placeholder="First name" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                <input type="text" name="lastName" value={formData.lastName} placeholder="Last name" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="email" name="email" value={formData.email} placeholder="Email address" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                <input type="text" name="contact" value={formData.contact} placeholder="Phone number" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <select name="option" value={formData.option} onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option value="" disabled>Select Option</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                            </select>
                            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                            <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-500 transition w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right - Contact Details */}
                <div className="bg-[#181218] p-6 md:p-10 rounded-lg flex flex-col justify-center w-full h-full">
                    <div className="space-y-4">
                        <ContactInfo icon={<FaPhone />} text="+91 99650-99394" link="tel:+91 9965099394" />
                        <ContactInfo icon={<FaEnvelope />} text="sugumarjagadeesh@mail.com" link="mailto:sugumarjagadeesh@mail.com" />
                        <ContactInfo icon={<FaLinkedin />} text="LinkedIn" link="https://www.linkedin.com/in/sugumar-jagadeesh-m-9bb6a7239/" />
                        <ContactInfo icon={<FaGithub />} text="GitHub" link="https://github.com/Sugumarjagadeesh45" />
                        <ContactInfo icon={<FaWhatsapp />} text="+91 99650-99394" link="https://wa.me/qr/ZRMYO6O7Y4NPH1" />
                        <ContactInfo icon={<span className="text-3xl md:text-4xl">📍</span>} text="Thingalur, Perundurai, Erode - 638 055 " />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Body5;
