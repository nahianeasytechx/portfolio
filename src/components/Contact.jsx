import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();
  setSent(true);
  setForm({ name: "", email: "", message: "" });
  setTimeout(() => setSent(false), 2000); // resets after 3s
};

  return (
    <section id="contact" className="w-full bg-white py-8 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">

          {/* Header — your original content, untouched */}
          <div className="text-center mb-6 md:mb-12">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contact
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-600 mt-4 text-center text-xl font-bold mx-auto">
              Let's build something great together
            </p>
          </div>

          {/* Card wrapper */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-left" style={{boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 30px -5px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(0,0,0,0.08)"}}>
            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-10 text-center">
                <p className="text-emerald-700 font-semibold text-lg">
                   Message sent! I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}