import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import business from "../data/business";

const navigation = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#110e0c] text-[#f5efe6]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#8b5e3c]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-60 right-[-100px] h-[550px] w-[550px] rounded-full bg-[#d6b18a]/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="border-b border-white/10 py-20 sm:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#d6b18a]">
              Until next time
            </p>

            <h2 className="mt-6 max-w-6xl font-display text-6xl font-medium leading-[0.85] tracking-[-0.045em] text-[#f8f1e8] sm:text-7xl lg:text-[9rem]">
              See you
              <span className="block italic text-[#d6b18a]">over coffee.</span>
            </h2>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-white/40">
                {business.tagline} A place designed to feel like a second home.
              </p>

              <a
                href="#"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#f5efe6] px-6 py-3.5 text-xs font-bold text-[#1d1713] transition hover:bg-white"
              >
                Back to top
                <ArrowUp size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="inline-flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full bg-[#f5efe6]">
                <img
                  src="/images/branding/logo.jpg"
                  alt="THE COZY CUP logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="font-display text-2xl leading-none">{business.shortName}</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-white/30">
                  Café & Kitchen
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-xs text-xs leading-6 text-white/40">
              {business.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              Explore
            </p>
            <nav className="mt-6 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight size={11} className="opacity-0 transition group-hover:opacity-60" />
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              Visit
            </p>

            <div className="mt-6 flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#d6b18a]" />
              <p className="text-sm leading-6 text-white/55">{business.location.address}</p>
            </div>

            <div className="mt-6 space-y-2 text-xs leading-5 text-white/45">
              <p>Mon–Fri · {business.hours.monday}</p>
              <p>Saturday · {business.hours.saturday}</p>
              <p>Sunday · {business.hours.sunday}</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} {business.name}</span>
          <span>Imaginary café · Academic project</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
