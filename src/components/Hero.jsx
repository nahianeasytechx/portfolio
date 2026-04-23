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

            {/* Social Links */}
            <div className="hero-socials flex justify-center lg:justify-start gap-3 mt-6 md:mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-violet-300 bg-white/60 backdrop-blur-sm text-violet-700 hover:bg-violet-800 hover:border-violet-800 hover:text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-violet-300 bg-white/60 backdrop-blur-sm text-violet-700 hover:bg-violet-800 hover:border-violet-800 hover:text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-violet-300 bg-white/60 backdrop-blur-sm text-violet-700 hover:bg-violet-800 hover:border-violet-800 hover:text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-violet-300 bg-white/60 backdrop-blur-sm text-violet-700 hover:bg-violet-800 hover:border-violet-800 hover:text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
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
