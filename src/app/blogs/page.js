"use client"; // Mark as client component

import React, { useEffect } from "react";
import "../globals.css";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";

const BlogPage = () => {
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
        {/* Blog Header */}
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
          <div className="relative z-10 text-center max-w-2xl p-6 m-10">
            <h1 className="text-5xl mb-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg section">
              BLOGS
            </h1>
            <h2 className="p-glow section">
              How EvolveInfi is Transforming Businesses with ISO 9001, Lean Six
              Sigma, and AI-Driven Digital Solutions
            </h2>
          </div>
        </section>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4">
          <section className="mb-10 section">
            <h3 className="text-3xl mb-4 font-bold subheading-text section">
              Introduction
            </h3>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-5 section">
              In today’s competitive business landscape, companies must
              streamline operations, enhance efficiency, and embrace digital
              transformation to stay ahead. At EvolveInfi, we specialize in
              helping businesses across Spain and Europe achieve operational
              excellence through ISO 9001 quality audits, Lean Manufacturing,
              Lean Six Sigma consulting, web application development, and
              AI-driven digital transformation.
            </p>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              With over 5 years of industry expertise, we empower manufacturing,
              engineering, IT, and service-based industries by offering
              data-driven strategies that improve efficiency, compliance, and
              scalability.
            </p>
          </section>

          {/* ISO 9001 Section */}
          <section className="mb-10 section">
            <h3 className="text-3xl mb-4 font-bold subheading-text section">
              The Power of ISO 9001 in Business Success
            </h3>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              Achieving ISO 9001 certification is more than just a compliance
              requirement—it’s a strategic move toward better quality
              management, customer satisfaction, and business growth.
            </p>
            <h4 className="text-xl font-bold mb-2 text-white bg-clip-text text-transparent">
              Why ISO 9001 Matters?
            </h4>
            <ul className="list-disc list-inside max-w-5xl text-justify mx-auto font-thin text-white mb-5 section">
              <li>
                Establishes a quality management system (QMS) for operational
                efficiency
              </li>
              <li>Improves customer satisfaction and trust</li>
              <li>Helps in risk management and regulatory compliance</li>
              <li>
                Enhances brand reputation and opens new market opportunities
              </li>
            </ul>
            <p className="max-w-5xl text-justify mx-auto px-4 font-thin text-white mb-10 section">
              At EvolveInfi, we provide ISO 9001 certification consulting,
              internal audits, and compliance solutions to help businesses
              achieve and maintain international quality standards.
            </p>
            <div className="overflow-hidden rounded-lg my-4">
              <img
                src="/assets/evolveinfi.com.png"
                alt="ISO 9001"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </section>

          {/* Lean Six Sigma Section */}
          <section className="mb-10 section">
            <h3 className="text-3xl mb-4 font-bold subheading-text section">
              Lean Six Sigma: Driving Efficiency & Cost Reduction
            </h3>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              In industries like manufacturing, engineering, and IT, efficiency
              is key to success. Lean Six Sigma combines Lean principles (waste
              reduction) with Six Sigma methodologies (process improvement) to
              deliver higher productivity and lower costs.
            </p>
            <h4 className="text-xl font-bold mb-2 text-white bg-clip-text text-transparent">
              How Lean Six Sigma Helps Businesses?
            </h4>
            <ul className="list-disc list-inside max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              <li>Eliminates waste, defects, and inefficiencies</li>
              <li>
                Enhances process standardization and workflow optimization
              </li>
              <li>Reduces operational costs and improves profitability</li>
              <li>Boosts employee productivity and customer satisfaction</li>
            </ul>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              Our Lean Principles consulting ensures that businesses implement
              the right strategies to optimize processes and achieve sustainable
              growth.
            </p>
            <img
              src="/assets/lean-manufacturing.png"
              alt="Lean Six Sigma"
              className="w-full h-100 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
            />
          </section>

          {/* Digital Transformation Section */}
          <section className="mb-10 section">
            <h3 className="text-3xl mb-4 font-bold subheading-text section">
              Digital Transformation & AI: The Future of Business
            </h3>
            <p className="max-w-5xl text-justify mx font-thin text-white mb-10 section">
              With the rise of Industry 4.0, businesses must leverage AI-driven
              digital transformation to stay competitive. At EvolveInfi, we
              integrate AI, automation, and cloud-based solutions to enhance
              business operations.
            </p>
            <h4 className="text-xl font-bold mb-2 text-white bg-clip-text text-transparent">
              Key Benefits of AI-Driven Digital Transformation:
            </h4>
            <ul className="list-disc list-inside max-w-5xl text-justify mx font-thin text-white mb-10 section">
              <li>AI-powered business automation for faster workflows</li>
              <li>
                Smart ERP, CRM, and cloud solutions for data-driven decisions
              </li>
              <li>
                Web application development for seamless digital experiences
              </li>
              <li>Advanced predictive analytics and AI consulting</li>
            </ul>
            <p className="max-w-5xl text-justify mx font-thin text-white mb-10 section">
              From automating manual processes to developing custom web
              applications, we ensure that businesses embrace technology for
              maximum efficiency and scalability.
            </p>
            <img
              src="/assets/digital-transformation.png"
              alt="Digital Transformation"
              className="w-full h-100 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
            />
          </section>

          {/* Custom Web Application Development Section */}
          <section className="mb-10 section">
            <h3 className="text-3xl mb-4 font-bold subheading-text section">
              Custom Web Application Development: A Game-Changer for Businesses
            </h3>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              A well-designed web application improves customer engagement,
              business automation, and operational control. We specialize in
              building scalable, secure, and high-performance web applications
              tailored to specific business needs.
            </p>
            <h4 className="text-xl font-bold mb-2 text-white bg-clip-text text-transparent">
              Our Web Development Services Include:
            </h4>
            <ul className="list-disc list-inside max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              <li>Custom web application development for automation</li>
              <li>API integration and system optimization</li>
              <li>UI/UX design for better user experience</li>
              <li>Secure, fast, and scalable cloud solutions</li>
            </ul>
            <p className="max-w-5xl text-justify mx-auto font-thin text-white mb-10 section">
              By combining AI, digital tools, and automation, we help businesses
              unlock new opportunities for growth and customer engagement.
            </p>
            <video
              src="/assets/web-development.mp4"
              alt="Custom Web Application Development"
              className="w-full h-120 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
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

export default BlogPage;
