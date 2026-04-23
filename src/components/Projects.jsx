import dokanxImg from "../assets/projects/dokanx.webp"; // replace with your actual image paths
import erpImg from "../assets/projects/erp.webp";
import aiImg from "../assets/projects/aitools.webp";

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
  return (
    <section id="project" className="w-full py-4 md:py-6 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">

        {/* Title — matches Metrics */}
        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center">
          Products / Projects
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-default flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-28 md:h-48 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {p.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2">
                  {p.description}
                </p>

                {/* Hover underline — matches Metrics */}
                <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 group-hover:w-12" />

                {/* <a href={p.link} className="mt-4 bg-emerald-800 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors w-fit">
                  Learn more
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}