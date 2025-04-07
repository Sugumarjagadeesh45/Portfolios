// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const Emailjs = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         contactNumber: "",
//         country: "",
//         state: "",
//         district: "",
//         address: "",
//         pincode: "",
//         message: "",
//     });

//     console.log("formdata", formData)

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs
//             .send(
//                 "service_j27yzso",
//                 "template_fxzw2kc",
//                 formData,
//                 "jWw2uWYiwIYxnEaHg"
//             )
//             .then(
//                 (result) => {
//                     console.log("Result to emailjs", result)
//                     alert("Message sent successfully!");
//                     setFormData({
//                         name: "",
//                         email: "",
//                         contact: "",
//                         message: "",
//                     });
//                 },
//                 (error) => {
//                     console.log("error to emailjs", error)
//                     alert("Failed to send message. Please try again.");
//                 }
//             );
//     };

//     return (
//         <div className="relative bg-white ">


//             {/* Contact Form */}
//             <div className="relative z-10 flex items-center justify-center min-h-screen ">
//                 <div className="bg-slate-200 p-8 rounded-lg shadow-xl max-w-4xl w-full">
//                     <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
//                         Contact Us
//                     </h1>
//                     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {/* Name */}
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Name"
//                             className="p-3 border rounded-lg"
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Name"
//                             className="p-3 border rounded-lg"
//                             required
//                         />
//                         <input
//                             type="tel"
//                             name="contact"
//                             value={formData.contact}
//                             onChange={handleChange}
//                             placeholder="Name"
//                             className="p-3 border rounded-lg"
//                             required
//                         />

//                         {/* Message */}
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Message"
//                             className="p-3 border rounded-lg col-span-1 md:col-span-2"
//                             required
//                         />
//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 col-span-1 md:col-span-2"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Emailjs;











// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const Emailjs = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         contact: "",
//         option: "",
//         message: "",
//     });

//     console.log("formdata", formData)

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs
//             .send(
//                 "service_j27yzso",
//                 "template_hzsxu6e",
//                 formData,
//                 "jWw2uWYiwIYxnEaHg"
//             )
//             .then(
//                 (result) => {
//                     console.log("Result to emailjs", result)
//                     alert("Message sent successfully!");
//                     setFormData({
//                         firstName: "",
//                         lastName: "",
//                         email: "",
//                         contact: "",
//                         option: "",
//                         message: "",
//                     });
//                 },
//                 (error) => {
//                     console.log("error to emailjs", error)
//                     alert("Failed to send message. Please try again.");
//                 }
//             );
//     };

//     return (
//         <div className="relative bg-white ">


//             {/* Contact Form */}
//             <div className="relative z-10 flex items-center justify-center min-h-screen ">
//                 <div className="bg-[#181218] p-6 md:p-10 rounded-lg">
//                     <h2 className="text-3xl md:text-4xl font-bold text-purple-400">Let's work together!</h2>
//                     <p className="mt-3 text-gray-400 text-sm md:text-base">
//                         I design and code beautifully simple things, and I love what I do. Just simple like that!
//                     </p>

//                     <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="text" name="firstName" value={formData.firstName} placeholder="First name" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
//                             <input type="text" name="lastName" value={formData.lastName} placeholder="Last name" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input type="email" name="email" value={formData.email} placeholder="Email address" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
//                             <input type="text" name="contact" value={formData.contact} placeholder="Phone number" onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
//                         </div>
//                         <select className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
//                             <option name="option" value={formData.option} disabled selected>Select Option</option>
//                             <option>UI/UX Design</option>
//                             <option>Web Development</option>
//                             <option>App Development</option>
//                         </select>
//                         <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
//                         <button type='submit' className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-500 transition w-full md:w-auto">
//                             Send Message
//                         </button>
//                     </form>
//                 </div>

//             </div>
//         </div >
//     );
// };

// export default Emailjs;