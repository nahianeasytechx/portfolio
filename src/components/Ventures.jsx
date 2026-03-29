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
    <section className="py-4 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Our Ventures
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our portfolio of innovative companies transforming industries
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >

              
              <div className="relative p-6 sm:p-8">
                {/* Logo Container with Enhanced Styling */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading='lazy'
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/48/48';
                      }}
                    />
                  </div>
                  

                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-500 transition-colors duration-300">
                      {venture.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {venture.description}
                    </p>
                  </div>



                  {/* Learn More Button */}
                  <div className="pt-4">
                    <a
                      target="_blank"
                      href={venture.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors group/btn"
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