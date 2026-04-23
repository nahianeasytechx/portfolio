import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-violet-700 rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17 8C8 10 5.9 16.17 3.82 20.82L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2" />
            </svg>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-gray-700 hover:text-violet-700 transition-colors">Home</a>
          <a href="#project" className="text-sm font-medium text-gray-700 hover:text-violet-700 transition-colors">Project</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-violet-700 transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <a href="#contact" className="cursor-pointer hidden md:block bg-violet-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-violet-700 transition-colors">
          Sign Me Up
        </a>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "max-h-60 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 md:px-6 py-3 md:py-4 flex flex-col gap-3 md:gap-4">
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">Home</a>
          <a href="#project" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">Project</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">Contact</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="cursor-pointer bg-violet-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-fit">
            Sign Me Up
          </a>
        </div>
      </div>
    </nav>
  );
}