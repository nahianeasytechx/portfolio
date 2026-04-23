const caseStudies = [
  {
    title: "Project Akont Thammins",
    result: "Increased efficiency by 40%",
    description: "Integrated efficiency systems that afforded precision accounts and further productionals the growth.",
    img: "https://plus.unsplash.com/premium_photo-1661302846246-e8faef18255d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Coolest Soorption",
    result: "Increased results by 200%",
    description: "Streamline cross-sectional efforts, custom automation and many cultural solutions.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    title: "Project Easiruption",
    result: "Grew revenue by 200%",
    description: "Developmental experiences and content, increase efficiencies, and digital software multicolity and government solutions.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
  },
];

export default function CaseStudy() {
  return (
    <section id="casestudy" className="w-full bg-white py-4 md:py-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-8">Case Study / Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {caseStudies.map((c) => (
            <div
              key={c.title}
              className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50"
            >
              <div className="h-28 md:h-44 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-5 flex flex-col gap-1 md:gap-2">
                <h3 className="font-bold text-gray-900 text-xs md:text-sm">{c.title}</h3>
                <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed line-clamp-2">{c.description}</p>
                <p className="text-violet-700 font-bold text-xs md:text-sm mt-0.5 md:mt-1">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}