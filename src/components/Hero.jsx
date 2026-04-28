import React from "react";
import BannerImg from "../assets/b1.webp";

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-violet-50/60 via-white to-white  flex items-center">
      {/* Background Blobs for Subtle Complexity */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      {/* Soft Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 max-w-7xl mx-auto w-full">
        {/* Left Side — Text Content */}
        <div className="flex flex-col justify-center px-4 py-8 md:px-8 lg:px-12 xl:px-4">
          <div className="text-center md:text-start max-w-xl w-full mx-auto md:mx-0">

            <h1 className="hero-title text-[32px] md:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-[1.15] mb-5 md:mb-6">
              Build a Real Business <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">Not Just a Busy One</span>
            </h1>
            
            <p className="hero-subtitle text-sm md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed font-medium">
              Leveraging 7+ years of experience in ERP systems, SaaS products, AI, and digital growth to architect scalable tech solutions and drive business transformation.
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex flex-wrap justify-center md:justify-start gap-4 md:gap-5">
              <a
                href="#project"
                className="relative overflow-hidden group text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm lg:text-base font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-xl shadow-[0_4px_14px_0_rgb(139,92,246,0.39)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.23)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="relative overflow-hidden group text-center bg-white border-2 border-gray-200 text-gray-700 text-sm lg:text-base font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:border-violet-600 hover:text-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Book a Meeting</span>
                <div className="absolute inset-0 bg-violet-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              </a>
            </div>

            
            {/* Social Links */}
            <div className="hero-socials flex justify-center md:justify-start gap-3 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm text-gray-500 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm text-gray-500 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm text-gray-500 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side — Images & Floating Cards */}
        <div className="hero-image relative flex items-center justify-center mt-12 md:mt-0 min-h-[400px] md:min-h-[600px] w-full">
          {/* Subtle Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-tr from-violet-400 to-purple-300 rounded-full blur-[60px] md:blur-[80px] opacity-40 animate-pulse"></div>
          
          <img
            src={BannerImg}
            alt="Nahian — Systems Architect & Developer"
            width={800}
            height={580}
            className="w-full h-full max-h-[400px] md:max-h-[580px] object-contain object-center z-10 drop-shadow-2xl"
            fetchPriority="high"
          />

          {/* Floating UI Element 1: 800+ Projects */}
          <div 
            className="absolute -top-12 md:top-20 right-4 md:-right-4 z-20 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-3 md:p-4 animate-float flex items-center gap-3 md:gap-4 transition-transform hover:scale-105" 
            style={{ animationDelay: '1.5s', animationDuration: '6s' }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-100 to-purple-50 rounded-full flex items-center justify-center text-violet-600 shadow-inner">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wide">Delivered</p>
              <p className="text-lg md:text-xl font-extrabold text-gray-900 leading-none mt-0.5">800+ Projects</p>
            </div>
          </div>

          {/* Floating UI Element 2: Dashboard Preview */}
          <div 
            className="hidden lg:block absolute bottom-24 -left-8 z-20 bg-white/40 backdrop-blur-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-4 animate-float w-64 transition-transform hover:scale-105"
            style={{ animationDelay: '3s', animationDuration: '7s' }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">ERP System</p>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 w-3/4 rounded-full"></div>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-400 to-indigo-400 w-1/2 rounded-full"></div>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 w-5/6 rounded-full"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
