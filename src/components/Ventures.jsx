import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';


const Ventures = () => {
  const ventures = [
    {
      name: 'Easysoft',
      description: 'Focuses on scalable SaaS products, delivering innovative solutions for modern businesses.',
      logo: '/src/assets/companyLogo/easySoft.png',
      link: "https://easysoft.agency/",
      category: "SaaS",

    },
    {
      name: 'Easy Tech Solutions',
      description: 'Offers comprehensive digital marketing and software development services to help businesses grow.',
      logo: '/src/assets/companyLogo/easytech.webp',
      link: "https://easytechsolutions.xyz/",
      category: "Services",

    },
    {
      name: 'D Valley',
      description: 'Operates premium co-working and co-living spaces designed for productivity and community.',
      logo: '/src/assets/companyLogo/dvalley.png',
      link: "https://dvalleybd.com/",
      category: "Real Estate",
    }
  ];



  return (
    <section className="py-4 lg:py-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        {/* Header Section */}
        <div className="text-center mb-3 md:mb-4">
          <div className="inline-block">
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 md:mb-4">
              Our Ventures
            </h2>
            <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-4 max-w-2xl mx-auto">
            Discover our portfolio of innovative companies transforming industries
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl md:rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >

              
              <div className="relative p-3 sm:p-6 md:p-8">
                {/* Logo Container with Enhanced Styling */}
                <div className="flex items-start justify-between mb-3 md:mb-6">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={venture.logo}
                      alt={`${venture.name} logo`}
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
                      href={venture.link}
                      className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors group/btn"
                    >
                      <span>Learn more</span>
                      <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
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