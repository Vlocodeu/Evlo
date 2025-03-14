"use client"; // Mark as client component
import "../globals.css";

import React, { useEffect } from "react";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";

const ServicesPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <div className="relative h-screen">
      {/* Add Neural Network Background Here */}
      <NeuralNetworkBackground />
      <div className="relative z-10">
        {/* Header Section */}
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
          {/* Content */}
          <div className="relative z-10 text-center max-w-2xl p-6">
            <h1 className="text-5xl mb-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg section">
              OUR SERVICES
            </h1>
            <h2 className="p-glow text-xl text-gray-600 mb-10 text-white section">
              Empowering Businesses with Excellence & Innovation
            </h2>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              At EvolveInfi, we provide industry-leading solutions to help
              businesses across Spain and Europe achieve operational excellence,
              process optimization, and digital transformation. Our expert
              consulting services ensure compliance, efficiency, and sustainable
              growth.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Service 1 */}
            <div className="nft p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
              <div className="image-container relative mb-4">
                <video
                  src="/assets/iso-9001.mp4"
                  alt="ISO 9001 Quality Audits & Compliance"
                  className="w-full h-50 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="sub-start text-2xl mb-2">
                ISO 9001 Quality Audits & Compliance
              </h3>
              <ul className="description font-thin list-disc list-inside">
                <li>
                  ISO 9001 certification consulting and compliance support
                </li>
                <li>Quality management system (QMS) implementation</li>
                <li>
                  Internal audits, gap analysis, and continuous improvement
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
              <div className="image-container relative mb-4">
                <video
                  src="/assets/lean-manufacturing.mp4"
                  alt="Lean Six Sigma"
                  className="w-full h-50 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="sub-start text-2xl font-semibold mb-2">
                Lean Manufacturing
              </h3>
              <ul className="description list-disc list-inside">
                <li>
                  Lean Six Sigma consulting for waste reduction and efficiency
                </li>
                <li>Process automation and workflow optimization</li>
                <li>
                  Kaizen, 5S methodology, and continuous improving strategies
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
              <div className="image-container relative mb-4">
                <video
                  src="/assets/digital-trans.mp4"
                  alt="Digital Transformation & AI Consulting"
                  className="w-full h-50 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="sub-start text-2xl font-semibold mb-2">
                Digital Transformation & AI Consulting
              </h3>
              <ul className="description list-disc list-inside">
                <li>AI-powered business automation solutions</li>
                <li>Cloud integration and data-driven decision-making</li>
                <li>Smart ERP, CRM, and enterprise software consulting</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
              <div className="image-container relative mb-4">
                <video
                  src="/assets/web-dev.mp4"
                  alt="Custom Web Application Development"
                  className="w-full h-50 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="sub-start text-2xl font-semibold mb-2">
                Custom Web Application Development
              </h3>
              <ul className="description list-disc list-inside">
                <li>Scalable, secure, and high-performance web applications</li>
                <li>
                  Custom software solutions for business process automation
                </li>
                <li>UI/UX design, API development, and system integration</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
              <div className="image-container relative mb-4">
                <video
                  src="/assets/business-growth.mp4"
                  alt="Business Growth & Strategy Consulting"
                  className="w-full h-50 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="sub-start text-2xl font-semibold mb-2">
                Business Growth & Strategy Consulting
              </h3>
              <ul className="description list-disc list-inside">
                <li>Data analytics and business intelligence solutions</li>
                <li>Digital marketing and brand positioning strategies</li>
                <li>Customized growth plans for operational scalability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 ">
          <h2 className="text-2xl font-bold mt-10 mb-4 text-white text-center bg-clip-text text-transparent section">
            Why Choose EvolveInfi?
          </h2>
          <ul className="max-w-2xl test-center mx-auto list-disc list-inside mb-8 text-white section">
            <li>Expert consulting with 5+ years of experience</li>
            <li>
              Proven methodologies like Lean Six Sigma, AI automation, and ISO
              certification
            </li>
            <li>
              Industry-focused solutions tailored for manufacturing, IT, and
              service sectors
            </li>
            <li>
              Data-driven strategies for efficiency, compliance, and digital
              innovation
            </li>
          </ul>
          <p className="text-lg text-center font-semibold text-white section">
            Ready to transform your business? Contact us today!
          </p>
        </section>
        {/* Footer */}
        <footer className="text-white py-10 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Left Section - Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">Connect with us</h3>
              <p className="mt-2 text-gray-400">info@nitikajindal.com</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-white text-2xl hover:text-gray-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white text-2xl hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white text-2xl hover:text-gray-400">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" className="text-white text-2xl hover:text-gray-400">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>

            {/* Center Section - Email Info */}
            <div className="text-center md:text-left mt-6 md:mt-0">
              <p className="text-sm text-gray-500 mt-4">
                © 2025. All rights reserved.
              </p>
            </div>

            {/* Right Section - Email Subscription */}
            <div className="mt-6 md:mt-0">
              <div className="mt-2 flex items-center">
                <a href="/contact" className="badge ml-3">
                  Submit Your Inquiry
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ServicesPage;
