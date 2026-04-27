import dokanxImg from "../assets/projects/dokanx.webp";
import erpImg from "../assets/projects/erp.webp";
import aiImg from "../assets/projects/aitools.webp";
import { useScrollReveal, staggerDelay } from '../hooks/useScrollReveal';

const projects = [
  {
    name: "DokanX (e-commerce platform)",
    description:
      "DokanX is an e-commerce platform with management in ERP, SaaS products, AI, and digital growth products.",
    image: dokanxImg,
    link: "dokanxbd.com",
  },
  {
    name: "Custom ERP System",
    description:
      "Custom ERP with systems, card and software development collaborators.",
    image: erpImg,
    link: "",
  },
  {
    name: "AI Tools",
    description:
      "AI Tools concretizes visually, customizes techniques, scalable and automations and processes.",
    image: aiImg,   
    link: "",
  },
];

export default function Projects() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="project" className="w-full py-4 md:py-6 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">

        {/* Title */}
        <h2 ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''} text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center`}>
          Products / Projects
        </h2>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, index) => (
            <div
              key={p.name}
              className={`reveal ${gridVisible ? 'visible' : ''} group relative bg-gradient-to-br from-white via-white to-violet-50 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer flex flex-col`}
              style={staggerDelay(index, 120)}
            >
              {/* Subtle hover background accent */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors duration-500 pointer-events-none"></div>

              {/* Image */}
              <div className="w-full h-32 md:h-48 overflow-hidden bg-gray-100 relative z-10">
                <img
                  src={p.image}
                  alt={p.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-6 flex flex-col flex-1 relative z-10">
                <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 md:mb-2 group-hover:text-violet-600 transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
                  {p.description}
                </p>

                {/* Hover underline */}
                <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}