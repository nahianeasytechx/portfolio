import { useScrollReveal, staggerDelay } from '../hooks/useScrollReveal';

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    ),
    title: "Consulting",
    description: "Consulting, connoissuing and SaaS expertise.",
    category: "Strategy",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: "SaaS Development",
    description: "Developments, comparisons, SaaS development.",
    category: "Development",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
    ),
    title: "ERP Solutions",
    description: "Creative solutions with solutions and ERP development.",
    category: "Enterprise",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
    ),
    title: "Media Buying",
    description: "Media buying manages and optimises media accounts.",
    category: "Marketing",
  },
];

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="services" className="py-4 md:py-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''} text-center mb-4 md:mb-6`}>
          <div className="inline-block">
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 md:mb-4">
              Our Services
            </h2>
            <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full shimmer-line"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-2 md:mt-4 max-w-2xl mx-auto">
            A range of services tailored to help your business grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((s, index) => (
            <div
              key={s.title}
              className={`reveal ${gridVisible ? 'visible' : ''} group rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50`}
              style={staggerDelay(index, 120)}
            >
              <div className="relative p-3 sm:p-6 md:p-8">

                {/* Icon Container */}
                <div className="flex items-start justify-between mb-3 md:mb-6">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 text-violet-700">
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