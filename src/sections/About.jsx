import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Heart,
  Sparkles,
} from "lucide-react";

import business from "../data/business";
import SafeImage from "../components/SafeImage";

function About() {
  const about = business.about;
  const highlights = business.highlights || [];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fbf8f3] py-24 md:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#8b5e3c]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#d7b89c]/[0.08] blur-3xl" />

      <div className="cafe-container relative">
        {/* Main story */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative number */}
            <div className="absolute -left-4 -top-10 z-20 font-serif text-[110px] font-medium leading-none text-[#8b5e3c]/[0.08] md:-left-8 md:-top-14 md:text-[150px]">
              01
            </div>

            {/* Main image */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#eee7de]">
              <SafeImage
                src={about?.image}
                alt={about?.title || `${business.name} story`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#fbf8f3]/95 px-4 py-3 shadow-xl backdrop-blur-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1d1713] text-[#fbf8f3]">
                  <Coffee size={16} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="font-serif text-base font-semibold text-[#1d1713]">
                    Made with care
                  </p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8a8179]">
                    Every single day
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Vertical caption */}
            <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8a8179]">
                Crafted for good moments
              </span>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: "easeOut",
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8b5e3c]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
                {about?.eyebrow || "Our story"}
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-[#1d1713] sm:text-6xl md:text-7xl">
              {about?.title || "Made slowly. Served warmly."}
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-7 text-[#6f665e]">
              <p>
                {about?.description ||
                  "We believe a great café is more than what's on the plate. It's the smell of freshly brewed coffee, the conversations that last a little longer and the feeling of having somewhere you can always return to."}
              </p>

              <p>
                At {business.name}, every detail is designed to make your
                visit feel relaxed, personal and memorable.
              </p>
            </div>

            {/* Philosophy row */}
            <div className="mt-10 grid grid-cols-3 border-y border-[#1d1713]/10 py-6">
              <div className="pr-4">
                <Heart
                  size={19}
                  strokeWidth={1.35}
                  className="mb-3 text-[#8b5e3c]"
                />
                <p className="font-serif text-lg font-semibold text-[#1d1713]">
                  Warm
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#8a8179]">
                  Hospitality
                </p>
              </div>

              <div className="border-l border-[#1d1713]/10 px-4">
                <Coffee
                  size={19}
                  strokeWidth={1.35}
                  className="mb-3 text-[#8b5e3c]"
                />
                <p className="font-serif text-lg font-semibold text-[#1d1713]">
                  Thoughtful
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#8a8179]">
                  Craft
                </p>
              </div>

              <div className="border-l border-[#1d1713]/10 pl-4">
                <Sparkles
                  size={19}
                  strokeWidth={1.35}
                  className="mb-3 text-[#8b5e3c]"
                />
                <p className="font-serif text-lg font-semibold text-[#1d1713]">
                  Memorable
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#8a8179]">
                  Moments
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#experience"
              className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d1713]"
            >
              <span className="border-b border-[#1d1713] pb-1 transition group-hover:border-[#8b5e3c] group-hover:text-[#8b5e3c]">
                Discover the experience
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d1713]/20 transition duration-300 group-hover:border-[#8b5e3c] group-hover:bg-[#8b5e3c] group-hover:text-white">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="mt-24 border-t border-[#1d1713]/10 pt-8 md:mt-32">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8b5e3c]">
                  What matters to us
                </p>

                <h3 className="mt-2 font-serif text-3xl font-medium text-[#1d1713] md:text-4xl">
                  The little things matter.
                </h3>
              </div>

              <Sparkles
                size={22}
                strokeWidth={1.2}
                className="hidden text-[#8b5e3c]/60 sm:block"
              />
            </div>

            <div className="grid border-y border-[#1d1713]/10 md:grid-cols-3">
              {highlights.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.number || item.title || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className={`group py-7 md:px-7 md:py-9 ${
                    index !== 0
                      ? "border-t border-[#1d1713]/10 md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#8b5e3c]">
                      {item.number || `0${index + 1}`}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#1d1713]/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8b5e3c]"
                    />
                  </div>

                  <h4 className="mt-7 font-serif text-2xl font-semibold text-[#1d1713]">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-[#7a7169]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;