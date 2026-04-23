import React from 'react'
import { useScrollReveal, staggerDelay } from '../hooks/useScrollReveal';
import easySoftLogo from '../assets/companyLogo/easySoft.png';
import easytechLogo from '../assets/companyLogo/easytech.png';
import dvalleyLogo from '../assets/companyLogo/dvalley.png';


const Ventures = () => {

  const ventures = [
    {
      name: 'Easysoft',
      description: 'Focuses on scalable SaaS products, delivering innovative solutions for modern businesses.',
      logo: easySoftLogo,
      link: "https://easysoft.agency/",
      category: "SaaS",

    },
    {
      name: 'Easy Tech Solutions',
      description: 'Offers comprehensive digital marketing and software development services to help businesses grow.',
      logo: easytechLogo,
      link: "https://easytechsolutions.xyz/",
      category: "Services",

    },
    {
      name: 'D Valley',
      description: 'Operates premium co-working and co-living spaces designed for productivity and community.',
      logo: dvalleyLogo,
      link: "https://dvalleybd.com/",
      category: "Real Estate",
    }
  ];

  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-4 lg:py-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        {/* Header Section */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''} text-center mb-3 md:mb-4`}>
          <div className="inline-block">
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 md:mb-4">
              Our Ventures
            </h2>
            <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full shimmer-line"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-4 max-w-2xl mx-auto">
            Discover our portfolio of innovative companies transforming industries
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className={`reveal ${gridVisible ? 'visible' : ''} group bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-default`}
              style={staggerDelay(index, 120)}
            >

              
              <div className="relative p-3 sm:p-6 md:p-8">
                {/* Logo Container with Enhanced Styling */}
                <div className="flex items-start justify-between mb-3 md:mb-6">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <img
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      width={48}
                      height={48}
                      className="w-7 h-7 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading='lazy'
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/48/48';
                      }}
                    />
                  </div>
                  

                </div>

                {/* Content */}
                <div className="space-y-2 md:space-y-4">
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-violet-500 transition-colors duration-300">
                      {venture.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {venture.description}
                    </p>
                  </div>



                  {/* Learn More Button */}
                  <div className="pt-2 md:pt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={venture.link}
                      className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors group/btn"
                    >
                      <span>Learn more</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Ventures