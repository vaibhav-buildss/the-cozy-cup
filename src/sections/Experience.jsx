import {
  ArrowUpRight,
  Coffee,
  Heart,
  Sparkles,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import business from "../data/business";

const icons = {
  "Freshly brewed": Coffee,
  "Made with care": Heart,
  "Good atmosphere": Sparkles,
};

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#1d1713] py-24 text-[#f5efe6] sm:py-32 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#8b5e3c]/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#c49a78]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* =================================================
            INTRO
        ================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3 text-[#d6b18a]">
              <span className="h-px w-8 bg-[#d6b18a]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                The experience
              </span>
            </div>

            <p className="mt-7 max-w-xs text-xs leading-6 text-white/40">
              A café should give you a reason to slow down.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl font-display text-5xl font-medium leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-[7rem]"
          >
            Come for the coffee.
            <span className="block italic text-[#c9a27f]">
              Stay for everything else.
            </span>
          </motion.h2>
        </div>

        {/* =================================================
            HIGHLIGHTS
        ================================================== */}

        <div className="mt-20 border-t border-white/10">
          {business.highlights.map((item, index) => {
            const Icon = icons[item.title] || Sparkles;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-6 border-b border-white/10 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:py-10"
              >
                {/* Number */}
                <span className="font-display text-2xl text-white/20 transition-colors duration-300 group-hover:text-[#d6b18a]">
                  {item.number}
                </span>

                {/* Main content */}
                <div className="flex gap-5">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#d6b18a] transition duration-300 group-hover:border-[#d6b18a]/30 group-hover:bg-[#d6b18a]/10 sm:flex">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-display text-3xl font-medium text-white sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-white/40 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white sm:flex">
                  <ArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =================================================
            AMENITIES
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6b18a]/10 text-[#d6b18a]">
              <Wifi size={18} />
            </div>

            <div>
              <p className="font-display text-2xl text-white">
                Made for staying awhile.
              </p>

              <p className="mt-1 text-xs leading-5 text-white/35">
                Settle in, connect and make yourself comfortable.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {business.amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-full border border-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white/50 transition hover:border-white/25 hover:text-white"
              >
                {amenity}
              </span>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            CLOSING STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-xs leading-6 text-white/30">
            Good food, good coffee and a little more time to enjoy
            both.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#d6b18a]"
          >
            Plan your visit

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;