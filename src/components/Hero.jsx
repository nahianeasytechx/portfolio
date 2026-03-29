import React from "react";
import BannerImg from "../assets/b1.webp";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen overflow-hidden">
      <div className="flex flex-col md:grid md:grid-cols-2 ">
        {/* Left Side — Text Content */}
        <div className="flex  items-center lg:items-start px-8 py-8 md:py-16 lg:py-24 md:px-12 lg:px-16">
          <div className="text-center md:text-start max-w-xl w-full">
            <h1 className="text-3xl md:text-4xl lg:text-[51px] font-extrabold text-gray-900 leading-tight mb-4">
              I Build Systems That Build Businesses
            </h1>
            <p className="text-gray-500 text-sm  mb-8 leading-relaxed">
              Leveraging 7+ years of experience in ERP systems, SaaS products,
              AI, and digital growth to architect scalable tech solutions and
              drive business transformation.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="#project"
                className="text-center  bg-emerald-800 text-white text-xs md:text-xs lg:text-sm font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 text-gray-700 text-xs md:text-xs lg:text-sm  font-semibold px-6 py-3 rounded-lg hover:border-emerald-700 hover:text-emerald-700 transition-colors text-sm"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="relative w-full h-100 md:hidden bg-transparent">
          <div className=" right-4 w-8 h-8 bg-emerald-700 rounded-full opacity-20 z-10" />
          {/* Neon Glow */}
          <div className="absolute top-30 left-20 -z-10  w-[450px] h-[450px] bg-linear-to-r from-emerald-400 to-emerald-900 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

          <img
            src={BannerImg}
            alt="Profile"
            className="absolute top-10 w-full h-full object-contain object-top"
            fetchPriority="high"
          />
        </div>

        {/* Desktop Image */}
        <div className="relative hidden md:block bg-transparent">
          <div className="absolute top-10 right-6 w-10 h-10 bg-emerald-700 rounded-full opacity-20 z-10" />
          {/* Neon Glow */}
          <div className="absolute top-30 left-40 -z-10  w-[450px] h-[450px] bg-linear-to-r from-emerald-600 to-emerald-300 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
          <div className="hidden lg:block absolute top-24 left-44 -z-10  w-[450px] h-[450px] bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
          <img
            src={BannerImg}
            alt="Profile"
            className="w-full h-[630px] object-contain object-top"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
