import { FiMonitor, FiTv } from "react-icons/fi";
import { FaUser, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaUser size={20} />,
    title: "Consulting",
    description: "Consulting, connoissuing and SaaS expertise.",
    category: "Strategy",
  },
  {
    icon: <FiMonitor size={20} />,
    title: "SaaS Development",
    description: "Developments, comparisons, SaaS development.",
    category: "Development",
  },
  {
    icon: <FaDatabase size={20} />,
    title: "ERP Solutions",
    description: "Creative solutions with solutions and ERP development.",
    category: "Enterprise",
  },
  {
    icon: <FiTv size={20} />,
    title: "Media Buying",
    description: "Media buying manages and optimises media accounts.",
    category: "Marketing",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-4 md:py-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section — mirrors Ventures */}
        <div className="text-center mb-4 md:mb-6">
          <div className="inline-block">
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 md:mb-4">
              Our Services
            </h2>
            <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-4 max-w-2xl mx-auto">
            A range of services tailored to help your business grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-xl md:rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative p-3 sm:p-6 md:p-8">

                {/* Icon Container — mirrors Ventures logo container */}
                <div className="flex items-start justify-between mb-3 md:mb-6">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 text-violet-700">
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 md:space-y-4">
                  <div>
                    {/* Category badge */}
                    <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-medium bg-violet-50 text-violet-700 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full mb-1 md:mb-2">
                      {s.category}
                    </span>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-violet-500 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
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