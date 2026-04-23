import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="w-full py-8 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} flex flex-col items-center text-center`}
        >
          {/* Decorative quote mark */}
          <div className="mb-4 md:mb-6">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-violet-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>

          {/* Main statement */}
          <p className="max-w-3xl text-gray-600 text-base md:text-3xl lg:text-4xl font-bold leading-snug md:leading-relaxed mb-6 md:mb-8">
            Over 7 years of deep industry experience, successfully delivering{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">800+ projects</span>{" "}
            globally and managing over{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">$1M+</span> in
            digital ad spend across various markets.
          </p>

          {/* Mini stat pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-violet-100">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
              ERP Systems
            </span>
            <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-violet-100">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
              SaaS Products
            </span>
            <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-violet-100">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
              AI Solutions
            </span>
            <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-violet-100">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
              Digital Growth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
