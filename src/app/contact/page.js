// "use client";

// import React from "react";
// import "../globals.css";

// import { useEffect } from "react";

// const ContactUs = () => {
//   useEffect(() => {
//     const sections = document.querySelectorAll(".section");

//     const options = {
//       root: null, // Use the viewport as the root
//       threshold: 0.1, // Trigger when 10% of the section is visible
//     };

//     const callback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible"); // Add visible class
//           observer.unobserve(entry.target); // Stop observing once visible
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     sections.forEach((section) => {
//       observer.observe(section);
//     });
//   }, []);
//   return (
//     <div className="relative bg-black">
//       <section className="wrapper">
//         <div className="hero"></div>
//         <div className="content-back-contactus">
//           <h1 className="h1-glow local-content-contactus section">
//             Contact Us
//           </h1>
//           <form className="nft bg-gray-800 p-6 section">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-white mb-2">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-white mb-2">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="subject" className="block text-white mb-2">
//                 Subject:
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-white mb-2">
//                 Message:
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
//                 rows="4"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white py-10 px-6 section">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           {/* Left Section - Contact Info */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold">Contact</h3>
//             <p className="mt-2 text-gray-400">
//               Get in touch for quality consulting services.
//             </p>
//             <div className="flex justify-center md:justify-start space-x-4 mt-4">
//               <a href="#" className="text-white text-2xl hover:text-gray-400">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-white text-2xl hover:text-gray-400">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="#" className="text-white text-2xl hover:text-gray-400">
//                 <i className="fab fa-tiktok"></i>
//               </a>
//               <a href="#" className="text-white text-2xl hover:text-gray-400">
//                 <i className="fab fa-x-twitter"></i>
//               </a>
//             </div>
//             <p className="text-sm text-gray-500 mt-4">
//               © 2025. All rights reserved.
//             </p>
//           </div>

//           {/* Center Section - Email Info */}
//           <div className="text-center md:text-left mt-6 md:mt-0">
//             <p className="text-lg font-medium">info@nitikajindal.com</p>
//           </div>

//           {/* Right Section - Email Subscription */}
//           <div className="mt-6 md:mt-0">
//             <h3 className="text-lg font-semibold text-center md:text-left">
//               Your Email Address
//             </h3>
//             <div className="mt-2 flex items-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email here"
//                 className="w-64 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition duration-300">
//                 Submit Your Inquiry
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs; // Ensure this is a default export

"use client";

import React, { useEffect } from "react";
import "../globals.css";

const ContactUs = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="relative bg-black">
      {/* Contact Form Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Gradient Background & Animated Elements */}
        <div className="absolute inset-0 gradient-background">
          <div className="gradient-sphere sphere-1 section"></div>
          <div className="gradient-sphere sphere-2 section"></div>
          <div className="gradient-sphere sphere-3 section"></div>
          <div className="glow"></div>
          <div className="grid-overlay"></div>
          <div className="noise-overlay"></div>
          <div className="particles-container" id="particles-container"></div>
        </div>
        <div className="relative z-10 text-center max-w-2xl p-6 ">
          <p className="text-5xl mb-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg section">
            Contact Us
          </p>
          <p className="mx-auto font-thin text-white mb-10 section">
            Email, call or complete the form to learn how we can help.
          </p>

          {/* Additional Content */}
        </div>
        <div className="flex justify-between w-full mt-5 p-8 section">
          {/* Customer Support */}
          <div className="max-w-sm">
            <h2 className="text-lg font-semibold text-white mb-2">
              Customer Support
            </h2>
            <p className="text-justify mx-auto font-thin text-white mb-10 section">
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>

          {/* Feedback and Suggestions */}
          <div className="max-w-sm">
            <h2 className="text-lg font-semibold text-white mb-2">
              Feedback and Suggestions
            </h2>
            <p className="text-justify mx-auto font-thin text-white mb-10 section">
              We value your feedback and are continuously working to improve
              EvolveInfi. Your input is crucial in shaping the future of
              EvolveInfi. .
            </p>
          </div>

          {/* Media Inquiries */}
          <div className="max-w-sm">
            <h2 className="text-lg font-semibold text-white mb-2">
              Media Inquiries
            </h2>
            <p className="text-justify mx-auto font-thin text-white mb-10 section">
              For media-related questions or press inquiries, please contact us
              at
              <span className="text-pink-600"> info@nitikajindal.com</span>.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20 p-20">
        <div className="grid md:grid-cols-2 gap-8 section">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white mb-2">
              Customer Support
            </h3>
            <p className="text-justify mx-auto px-4  font-thin text-white mb-10 section">
              Have questions? Our team is here to help.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Feedback and Suggestions
            </h3>
            <p className="text-justify mx-auto px-4  font-thin text-white mb-10 section">
              Share your thoughts to help us improve.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">FAQs</h3>
            <p className="text-justify mx-auto px-4  font-thin text-white mb-10 section">
              Check out our Frequently Asked Questions for quick answers.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
            <p className="text-justify mx-auto px-4  font-thin text-white mb-10 section">
              Explore our documentation and tutorial sections for comprehensive
              guides.
            </p>
          </div>

          {/* Contact Form on the right */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 w-full rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Google Maps Section */}
      <section className="container mx-auto py-16 px-6 text-center section">
        <h2 className="text-3xl font-bold text-white mb-4 section">
          Our Location
        </h2>
        <p className="mx-auto px-4  font-thin text-white mb-10 section">
          Connecting Near and Far
        </p>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151..."
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 section">FAQ</h2>
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          <details className="bg-white shadow p-4 rounded-lg section">
            <summary className="cursor-pointer font-semibold">
              What makes our service unique?
            </summary>
            <p className="mt-2 text-gray-600">
              Our service stands out due to personalized customer support.
            </p>
          </details>
          <details className="bg-white shadow p-4 rounded-lg section">
            <summary className="cursor-pointer font-semibold">
              How secure is my data?
            </summary>
            <p className="mt-2 text-gray-600">
              We follow industry security standards.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-white py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-gray-400 mt-2">info@nitikajindal.com</p>
          </div>
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <div className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg bg-gray-800 text-white"
              />
              <button className="ml-3 bg-blue-600 py-2 px-6 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
