import { ArrowUpRight, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import business from "../data/business";

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1d1713] py-24 text-[#f5efe6] sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#8b5e3c]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-60 right-[-100px] h-[600px] w-[600px] rounded-full bg-[#d6b18a]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d6b18a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d6b18a]">
              Visit the café
            </span>
          </div>

          <h2 className="mt-6 font-display text-6xl font-medium leading-[0.86] tracking-[-0.045em] text-[#f8f1e8] sm:text-7xl lg:text-[9rem]">
            Come say
            <span className="block italic text-[#d6b18a]">hello.</span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            {business.description}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8 lg:p-10"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              Find us
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5efe6] text-[#1d1713]">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                    Address
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {business.location.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                Opening hours
              </p>
              <div className="mt-4 space-y-2 text-sm text-white/65">
                <p>Monday–Friday · {business.hours.monday}</p>
                <p>Saturday · {business.hours.saturday}</p>
                <p>Sunday · {business.hours.sunday}</p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                Imaginary café · Academic project
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] bg-[#f5efe6] p-6 text-[#1d1713] sm:p-8 lg:p-10"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5e3c]">
                  Send a message
                </p>
                <h3 className="mt-3 font-display text-4xl leading-none sm:text-5xl">
                  Let's make it easy.
                </h3>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#1d1713] text-[#f5efe6] sm:flex">
                <Send size={17} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] text-[#756a62]">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-2xl border border-[#1d1713]/10 bg-white/60 px-4 text-sm outline-none transition placeholder:text-[#756a62]/40 focus:border-[#8b5e3c]/50 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] text-[#756a62]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="What would you like to ask?"
                  className="w-full resize-none rounded-2xl border border-[#1d1713]/10 bg-white/60 p-4 text-sm outline-none transition placeholder:text-[#756a62]/40 focus:border-[#8b5e3c]/50 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#1d1713] px-6 text-xs font-bold text-[#f5efe6] shadow-xl transition hover:bg-[#5a3824]"
              >
                {sent ? "Message saved for demo" : "Send message"}
                <ArrowUpRight size={16} />
              </button>

              <p className="text-center text-[9px] leading-5 text-[#756a62]/60">
                This contact form is a front-end demo. For placing an order,
                use the WhatsApp ordering option.
              </p>
            </form>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl text-[#f5efe6]">{business.tagline}</p>
            <p className="mt-1 text-[10px] text-white/35">
              {business.location.area} · {business.hoursShort}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
