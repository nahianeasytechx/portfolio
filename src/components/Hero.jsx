import React from "react";
import BannerImg from "../assets/b1.webp";

const Hero = () => {
  return (
    <section id="home" className="w-full  overflow-hidden">
      <div className="flex flex-col md:grid md:grid-cols-2 ">
        {/* Left Side — Text Content */}
        <div className="flex  items-center lg:items-start px-4 py-6 md:py-16 lg:py-24 md:px-12 lg:px-16">
          <div className="text-center md:text-start max-w-xl w-full">
            <h1 className="hero-title text-2xl md:text-4xl lg:text-[51px] font-extrabold text-gray-900 leading-tight mb-3 md:mb-4">
              I Build Systems That Build Businesses
            </h1>
            <p className="hero-subtitle text-sm md:text-base text-gray-500 mb-5 md:mb-8 leading-relaxed">
              Leveraging 7+ years of experience in ERP systems, SaaS products,
              AI, and digital growth to architect scalable tech solutions and
              drive business transformation.
            </p>
            <div className="hero-buttons flex justify-center lg:justify-start gap-3 md:gap-4">
              <a
                href="#project"
                className="text-center bg-violet-800 text-white text-xs lg:text-sm font-semibold px-4 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 text-gray-700 text-xs lg:text-sm font-semibold px-4 md:px-6 py-2.5 md:py-3 rounded-lg hover:border-violet-700 hover:text-violet-700 hover:shadow-lg transition-all duration-300"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="hero-image-mobile relative w-full h-72 md:hidden bg-transparent overflow-hidden">
          <div className="right-4 w-6 h-6 bg-violet-700 rounded-full opacity-20 z-10 animate-float" />
          {/* Neon Glow */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0 w-[300px] h-[300px] bg-linear-to-r from-violet-400 to-violet-900 rounded-full blur-[60px] opacity-50 animate-pulse"></div>

          <img
            src={BannerImg}
            alt="Nahian — Systems Architect & Developer"
            width={400}
            height={400}
            className="absolute top-10 w-full h-full object-contain object-top z-10"
            fetchPriority="high"
          />
        </div>

        {/* Desktop Image */}
        <div className="hero-image relative hidden md:block bg-transparent">
          <div className="absolute top-10 right-6 w-10 h-10 bg-violet-700 rounded-full opacity-20 z-10 animate-float" />
          {/* Neon Glow */}
          <div className="absolute top-30 left-40 -z-10  w-[450px] h-[450px] bg-linear-to-r from-violet-600 to-violet-300 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
          <div className="hidden lg:block absolute top-24 left-44 -z-10  w-[450px] h-[450px] bg-linear-to-r from-violet-400 to-violet-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
          <img
            src={BannerImg}
            alt="Nahian — Systems Architect & Developer"
            width={800}
            height={580}
            className="w-full h-[580px] object-contain object-top"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
