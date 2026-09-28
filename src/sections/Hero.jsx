import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Instagram,
  Play,
} from "lucide-react";

import business from "../data/business";
import SafeImage from "../components/SafeImage";

function Hero() {
  const hero = business.hero;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-[#1d1713] text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <SafeImage
          src={hero?.image}
          alt={business.name}
          className="h-full w-full object-cover"
          fallbackClassName="bg-[#2a211c]"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.85%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.8%22/%3E%3C/svg%3E')]" />

      {/* Top meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 pt-28 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-white/60" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/75">
            {hero?.eyebrow || "Specialty Coffee · Fresh Food"}
          </span>
        </motion.div>

        <motion.a
          href={business.socials?.instagram || "#"}
          target={business.socials?.instagram ? "_blank" : undefined}
          rel={business.socials?.instagram ? "noreferrer" : undefined}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden items-center gap-2 text-white/70 transition hover:text-white sm:flex"
        >
          <Instagram size={15} strokeWidth={1.4} />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
            Instagram
          </span>
        </motion.a>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(92vh-100px)] max-w-7xl items-center px-5 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65"
          >
            {business.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
            className="max-w-4xl font-serif text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[112px]"
          >
            {hero?.headline || "A little place for beautiful moments."}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-sm leading-6 text-white/70 md:text-[15px]">
              {hero?.description ||
                "Come for the coffee. Stay for the food, conversations and atmosphere."}
            </p>

            <div className="flex shrink-0 gap-3">
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1d1713] transition duration-300 hover:bg-[#f1e8dc]"
              >
                <span>
                  {hero?.primaryButton || "Explore the menu"}
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#location"
                className="inline-flex items-center gap-2 border border-white/35 px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                {hero?.secondaryButton || "Visit us"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <motion.a
            href="#featured"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group flex items-center gap-3 text-white/60 transition hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition group-hover:border-white/60">
              <ArrowDown
                size={13}
                strokeWidth={1.5}
                className="animate-bounce"
              />
            </span>

            <span className="hidden text-[8px] font-semibold uppercase tracking-[0.22em] sm:block">
              Scroll to explore
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="hidden text-right sm:block">
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45">
                {business.location?.area}
              </p>

              <p className="mt-1 text-[10px] text-white/70">
                {business.hoursShort || "Open daily"}
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
              <Play size={11} fill="currentColor" strokeWidth={1.2} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side label */}
      <div className="absolute bottom-32 right-5 z-10 hidden lg:block">
        <span className="block rotate-90 text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40">
          {business.name}
        </span>
      </div>
    </section>
  );
}

export default Hero;