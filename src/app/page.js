"use client"; // Mark as client component

import { useEffect } from "react";
import $ from "jquery";
import "./globals.css";

const HomeClient = () => {
  useEffect(() => {
    // Feature Background Parallax Effect
    // let zoom = $(".feature").css("background-size");
    // zoom = parseFloat(zoom) / 100;
    // let size = zoom * $(".feature").width();

    // $(window).on("scroll", function () {
    //   let fromTop = $(window).scrollTop();
    //   let newSize = size - fromTop / 3;

    //   if (newSize > $(".feature").width()) {
    //     $(".feature").css({
    //       "-webkit-background-size": newSize,
    //       "-moz-background-size": newSize,
    //       "-o-background-size": newSize,
    //       "background-size": newSize,
    //       "-webkit-filter": `blur(${fromTop / 100}px)`,
    //       opacity: 1 - (fromTop / $("html").height()) * 1.3,
    //     });
    //   }
    // });

    // // Opacity Effect for Non-Chrome/Safari Browsers
    // let isChrome =
    //   /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    // let isSafari =
    //   /Safari/.test(navigator.userAgent) &&
    //   /Apple Computer/.test(navigator.vendor);

    // if (!isChrome && !isSafari) {
    //   $(".feature").append('<div class="opaque"></div>');
    //   $(window).on("scroll", function () {
    //     let opacity = 0 + $(window).scrollTop() / 5000;
    //     $(".opaque").css("opacity", opacity);
    //   });
    // }

    // Scroll Animation using Intersection Observer
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null, // Use viewport as the root
      threshold: 0.1, // Trigger when 10% of section is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add class for animation
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
    <div className="relative bg-black">
      {/* Hero Section */}
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
        <div className="relative z-10 text-center max-w-2xl ">
          <p className="text-5xl font-bold text-white section">
            Transform Your Business with Expert Consulting
          </p>
          <a
            href="#services"
            className="badge-our-service mt-6 px-6 py-3 pt-10px inline-block section"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section with Scroll Animation */}
      <section id="services" className="">
        {/* <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-100 section">
            Our Services
          </h2>
          <div className="sec_service section">
            <div className="box section">
              <span></span>
              <div className="content section">
                <h2>ISO 9001 Quality Audits & Compliance</h2>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="box section">
              <span></span>
              <div className="content section">
                <h2>Lean Manufacturing & Process Optimization</h2>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="box section">
              <span></span>
              <div className="content section">
                <h2>Digital Transformation & AI Consulting</h2>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div> */}
        {/* running animation */}
        <h2 className="text-4xl mt-30 text-center font-bold mb-8 text-gray-100 section">
          Our Services
        </h2>
        <div className="app ">
          <div className="tag-list">
            <div
              className="loop-slider section"
              style={{
                "--duration": "15951ms",
                "--direction": "normal",
              }}
            >
              <div className="inner section">
                <div className="tag">
                  <span>#</span> webdev
                </div>
                <div className="tag">
                  <span>#</span> Gatsby
                </div>
                <div className="tag">
                  <span>#</span> JavaScript
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> Typescript
                </div>
                <div className="tag">
                  <span>#</span> animation
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> SVG
                </div>
                <div className="tag">
                  <span>#</span> HTML
                </div>
                {/* <!-- duplicated content --> */}
                <div className="tag">
                  <span>#</span> webdev
                </div>
                <div className="tag">
                  <span>#</span> Gatsby
                </div>
                <div className="tag">
                  <span>#</span> JavaScript
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> Typescript
                </div>
              </div>
            </div>
            <div
              className="loop-slider section"
              style={{
                "--duration": "19260ms",
                "--direction": "reverse",
              }}
            >
              <div className="inner section">
                <div className="tag">
                  <span>#</span> ISO 9001
                </div>
                <div className="tag">
                  <span>#</span> Lean Manufacturing
                </div>
                <div className="tag">
                  <span>#</span> Kaizen
                </div>
                <div className="tag">
                  <span>#</span> Auditing
                </div>
                <div className="tag">
                  <span>#</span> 5S
                </div>
                <div className="tag">
                  <span>#</span> Continious Improvement
                </div>
                <div className="tag">
                  <span>#</span> Computer Vision
                </div>
                <div className="tag">
                  <span>#</span> Digitalization
                </div>
                <div className="tag">
                  <span>#</span> Industry 4.0
                </div>
                <div className="tag">
                  <span>#</span> Digital Transformation
                </div>
                {/* <!-- duplicated content --> */}
                <div className="tag">
                  <span>#</span> AI Consultant
                </div>
                <div className="tag">
                  <span>#</span> AI Powered Web Development
                </div>
                <div className="tag">
                  <span>#</span> Process Automation
                </div>
                <div className="tag">
                  <span>#</span> Process Improvements
                </div>
                <div className="tag">
                  <span>#</span> Quality Management System
                </div>
                <div className="tag">
                  <span>#</span> Workflow Optimization
                </div>
                <div className="tag">
                  <span>#</span> Six Sigma
                </div>
                <div className="tag">
                  <span>#</span> Data analytics
                </div>
                <div className="tag">
                  <span>#</span> Intelligence Solutions
                </div>
                <div className="tag">
                  <span>#</span> Business process improvement
                </div>
              </div>
            </div>
            <div
              className="loop-slider section"
              style={{
                "--duration": "10449ms",
                "--direction": "normal",
              }}
            >
              <div className="inner section">
                <div className="tag">
                  <span>#</span> animation
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> SVG
                </div>
                <div className="tag">
                  <span>#</span> HTML
                </div>
                <div className="tag">
                  <span>#</span> animation
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> SVG
                </div>
                <div className="tag">
                  <span>#</span> HTML
                </div>
                {/* <!-- duplicated content --> */}
                <div className="tag">
                  <span>#</span> animation
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> SVG
                </div>
                <div className="tag">
                  <span>#</span> HTML
                </div>
                <div className="tag">
                  <span>#</span> animation
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> SVG
                </div>
                <div className="tag">
                  <span>#</span> HTML
                </div>
              </div>
            </div>
            <div
              className="loop-slider section"
              style={{
                "--duration": "16638ms",
                "--direction": "reverse",
              }}
            >
              <div className="inner section">
                <div className="tag">
                  <span>#</span> ISO 9001
                </div>
                <div className="tag">
                  <span>#</span> Lean Manufacturing
                </div>
                <div className="tag">
                  <span>#</span> Kaizen
                </div>
                <div className="tag">
                  <span>#</span> Auditing
                </div>
                <div className="tag">
                  <span>#</span> 5S
                </div>
                <div className="tag">
                  <span>#</span> Continious Improvement
                </div>
                <div className="tag">
                  <span>#</span> Computer Vision
                </div>
                <div className="tag">
                  <span>#</span> Digitalization
                </div>
                <div className="tag">
                  <span>#</span> Industry 4.0
                </div>
                <div className="tag">
                  <span>#</span> Digital Transformation
                </div>
                {/* <!-- duplicated content --> */}
                <div className="tag">
                  <span>#</span> AI Consultant
                </div>
                <div className="tag">
                  <span>#</span> AI Powered Web Development
                </div>
                <div className="tag">
                  <span>#</span> Process Automation
                </div>
                <div className="tag">
                  <span>#</span> Process Improvements
                </div>
                <div className="tag">
                  <span>#</span> Quality Management System
                </div>
                <div className="tag">
                  <span>#</span> Workflow Optimization
                </div>
                <div className="tag">
                  <span>#</span> Six Sigma
                </div>
                <div className="tag">
                  <span>#</span> Data analytics
                </div>
                <div className="tag">
                  <span>#</span> Intelligence Solutions
                </div>
                <div className="tag">
                  <span>#</span> Business process improvement
                </div>
              </div>
            </div>
            <div
              className="loop-slider section"
              style={{
                "--duration": "15936ms",
                "--direction": "normal",
              }}
            >
              <div className="inner section">
                <div className="tag">
                  <span>#</span> Next.js
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> webdev
                </div>
                <div className="tag">
                  <span>#</span> Typescript
                </div>
                <div className="tag">
                  <span>#</span> Gatsby
                </div>
                <div className="tag">
                  <span>#</span> animation
                </div>
                <div className="tag">
                  <span>#</span> Tailwind
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> SVG
                </div>
                <div className="tag">
                  <span>#</span> HTML
                </div>
                {/* <!-- duplicated content --> */}
                <div className="tag">
                  <span>#</span> Next.js
                </div>
                <div className="tag">
                  <span>#</span> React
                </div>
                <div className="tag">
                  <span>#</span> webdev
                </div>
                <div className="tag">
                  <span>#</span> Typescript
                </div>
                <div className="tag">
                  <span>#</span> Gatsby
                </div>
              </div>
            </div>
            <div className="fade"></div>
          </div>
        </div>
      </section>

      {/* About Us Section with Scroll Animation */}
      <section className="relative mt-50 ">
        <div className="gradient-background">
          {/* Gradient Background & Animated Elements */}
          <div className="absolute inset-0 gradient-background">
            <div className="glow"></div>
            <div className="grid-overlay"></div>
            <div className="particles-container" id="particles-container"></div>
          </div>
        </div>
        <div className="relative badge-container">
          <h2 className="badge text-2xl font-bold  mb-4 text-white bg-clip-text text-transparent section">
            ABOUT US
          </h2>
        </div>
        <div className="section ">
          <p className="max-w-5xl text-justify mx-auto px-4 font-thin text-white mb-10 ">
            At EvolveInfi, we empower businesses across Spain and Europe with
            expert solutions in ISO 9001 quality audits, Lean Manufacturing,
            Lean Six Sigma Black Belt consulting, web application development,
            and AI-driven digital transformation.
          </p>
        </div>
        <p className="max-w-5xl text-justify mx-auto px-4 font-thin text-white mb-10 section">
          With over 5 years of industry expertise, we specialize in helping
          manufacturing, engineering, IT, and service-based industries enhance
          efficiency, compliance, and operational visibility.
        </p>
        <ul className="max-w-5xl text-justify mx-auto px-4 list-disc list-inside font-thin text-white mb-6 section">
          <li>
            Quality Management & Compliance – Achieve ISO 9001 certification and
            streamline audit processes.
          </li>
          <li>
            Process Optimization & Lean Six Sigma – Improve productivity, reduce
            waste, and drive continuous improvement.
          </li>
          <li>
            Digital Transformation & AI Consulting – Leverage cutting-edge AI
            solutions to automate and optimize business operations.
          </li>
          <li>
            Custom Web Application Development – Build scalable, secure, and
            high-performance web applications tailored to your needs.
          </li>
        </ul>
        <p className="max-w-5xl text-justify mx-auto px-4 font-thin text-white mb-6 section">
          We help businesses optimize, automate, and grow with industry-leading
          strategies, enhancing operational excellence.
        </p>
        <p className="max-w-5xl text-justify mx-auto px-4 font-thin text-white mb-6 section">
          Looking to enhance efficiency and scale your business? Contact us
          today!
        </p>
        <div className="badge-container">
          <h2 className="badge text-2xl font-bold text-center mt-10 mb-4 text-white bg-clip-text text-transparent section">
            MISSION
          </h2>
        </div>
        <p className="max-w-5xl text-justify mx-auto px-4 mb-10 font-thin text-white section">
          At EvolveInfi, our mission is to empower businesses across Spain and
          Europe by delivering ISO 9001 quality audits, Lean Manufacturing, Lean
          Six Sigma consulting, AI-driven digital transformation, and custom web
          application development. We strive to enhance operational efficiency,
          drive process excellence, and foster digital innovation for
          manufacturing, engineering, IT, and service-based industries. Our goal
          is to help businesses optimize workflows, improve compliance, and
          achieve sustainable growth through cutting-edge technology and
          industry-best practices.
        </p>
        <div className="badge-container">
          <h2 className="badge text-2xl font-bold text-center mt-10 mb-4 text-white bg-clip-text text-transparent section">
            VISION
          </h2>
        </div>
        <p className="max-w-5xl text-justify mx-auto px-4 mb-12 font-thin text-white  section">
          Our vision is to become a leading global consulting firm specializing
          in quality management, process optimization, and digital
          transformation, helping businesses achieve operational excellence and
          competitive advantage in the evolving digital landscape. We aim to be
          the trusted partner for businesses seeking to automate, optimize, and
          scale their operations through ISO certification, AI solutions, and
          digital innovation.
        </p>
        <p className="max-w-5xl text-justify mx-auto px-4 font-thin text-white mb-6 section">
          By integrating Lean Six Sigma methodologies, AI-driven automation, and
          smart digital strategies, we envision a future where businesses
          maximize efficiency, reduce costs, and achieve long-term success in a
          rapidly evolving market.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
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
  );
};

export default HomeClient;
