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
    <section id="services" className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section — mirrors Ventures */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A range of services tailored to help your business grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative p-6 sm:p-8">

                {/* Icon Container — mirrors Ventures logo container */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 text-emerald-700">
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    {/* Category badge */}
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full mb-2">
                      {s.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-500 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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