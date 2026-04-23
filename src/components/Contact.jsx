import { useState } from "react";
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 2000);
  };

  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="contact" className="w-full py-8 md:py-12 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-x-12 lg:gap-20">

          {/* Left Side — CTA Content */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''} text-center lg:text-start`}>
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-violet-600 mb-2 md:mb-4">
                <span className="hidden lg:block w-8 h-px bg-violet-600"></span>
                Get in Touch
              </span>
              <h2 className="text-2xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-tight mb-3 md:mb-6">
                Let's Turn Your
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> Vision </span>
                Into Reality
              </h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mb-3 md:mb-4">
                Whether you need a custom ERP, a scalable SaaS product, or an AI-powered solution — I'm here to architect and build it. Let's talk about your next big move.
              </p>
            </div>



          </div>

          {/* Right Side — Contact Form */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-10 mb-36 lg:mb-0 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.06)]">
              {sent ? (
                <div className="bg-violet-50 border border-violet-200 rounded-2xl px-8 py-14 text-center">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-semibold text-xl mb-2">Message Sent!</p>
                  <p className="text-gray-500 text-sm">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-5">
                  <div>
                    <label htmlFor="contact-name" className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1 md:mb-1.5 block uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-white border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1 md:mb-1.5 block uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full bg-white border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1 md:mb-1.5 block uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="w-full bg-white border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer group w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all duration-300 text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                  >
                    Send Message
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}