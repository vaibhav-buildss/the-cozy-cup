import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import business from "../data/business";

function Location() {
  const hours = [
    ["Monday", business.hours.monday],
    ["Tuesday", business.hours.tuesday],
    ["Wednesday", business.hours.wednesday],
    ["Thursday", business.hours.thursday],
    ["Friday", business.hours.friday],
    ["Saturday", business.hours.saturday],
    ["Sunday", business.hours.sunday],
  ];

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#fbf8f3] py-24 sm:py-32 lg:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#8b5e3c]/[0.045] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="cafe-eyebrow">
            Find your way here
          </div>

          <h2 className="mt-5 font-display text-5xl font-medium leading-[0.9] tracking-[-0.035em] text-[#1d1713] sm:text-6xl lg:text-8xl">
            Your next
            <span className="block italic text-[#8b5e3c]">
              coffee stop.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#756a62] sm:text-base">
            Come by for a slow morning, a quick coffee,
            lunch with friends or an evening that doesn't
            need an ending.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/* Map / visual panel */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#1d1713] sm:min-h-[600px]"
          >
            {/* Map-like background */}
            <div className="absolute inset-0 opacity-80">
              <div className="absolute inset-0 bg-[#24201d]" />

              {/* roads */}
              <div className="absolute left-[18%] top-[-10%] h-[130%] w-[70px] rotate-[27deg] bg-white/[0.035]" />
              <div className="absolute left-[58%] top-[-10%] h-[130%] w-[110px] -rotate-[52deg] bg-white/[0.025]" />
              <div className="absolute left-[-10%] top-[48%] h-[90px] w-[120%] rotate-[7deg] bg-white/[0.03]" />
              <div className="absolute left-[-10%] top-[68%] h-[40px] w-[120%] -rotate-[18deg] bg-white/[0.025]" />

              {/* fine streets */}
              <div className="absolute left-[10%] top-[20%] h-px w-[80%] rotate-[12deg] bg-white/[0.08]" />
              <div className="absolute left-[8%] top-[35%] h-px w-[85%] -rotate-[6deg] bg-white/[0.07]" />
              <div className="absolute left-[5%] top-[58%] h-px w-[90%] rotate-[3deg] bg-white/[0.06]" />
              <div className="absolute left-[15%] top-[78%] h-px w-[75%] -rotate-[11deg] bg-white/[0.06]" />

              <div className="absolute left-[30%] top-[5%] h-[90%] w-px rotate-[8deg] bg-white/[0.06]" />
              <div className="absolute left-[48%] top-[0%] h-[100%] w-px -rotate-[12deg] bg-white/[0.05]" />
              <div className="absolute left-[76%] top-[5%] h-[90%] w-px rotate-[21deg] bg-white/[0.05]" />
            </div>

            {/* Map glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5e3c]/15 blur-3xl" />

            {/* Pin */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
                <div className="absolute inset-2 rounded-full border border-[#d6b18a]/30" />

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5efe6] text-[#1d1713] shadow-2xl">
                  <MapPin size={20} fill="currentColor" />
                </div>
              </div>

              {/* pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.7, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 -z-10 rounded-full border border-[#d6b18a]/40"
              />
            </motion.div>

            {/* Top label */}
            <div className="absolute left-5 top-5 right-5 flex items-start justify-between sm:left-7 sm:right-7 sm:top-7">
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Our location
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/60 backdrop-blur-md">
                <Navigation size={15} />
              </div>
            </div>

            {/* Bottom location card */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#1d1713]/80 p-5 backdrop-blur-xl sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-display text-2xl text-[#f5efe6] sm:text-3xl">
                      {business.name}
                    </p>

                    <p className="mt-2 max-w-md text-xs leading-5 text-white/50">
                      {business.location.address}
                    </p>
                  </div>

                  <a
                    href={
                      business.location.directionsUrl ||
                      business.location.mapsUrl ||
                      "#contact"
                    }
                    target={
                      business.location.directionsUrl ||
                      business.location.mapsUrl
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      business.location.directionsUrl ||
                      business.location.mapsUrl
                        ? "noreferrer"
                        : undefined
                    }
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1d1713] transition hover:bg-white"
                  >
                    Get directions

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information panel */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-[#1d1713]/10 bg-[#f1e9df] p-6 sm:p-8 lg:p-10"
          >
            {/* Address */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1713] text-[#f5efe6]">
                  <MapPin size={17} />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
                  Visit us
                </p>
              </div>

              <p className="mt-5 font-display text-2xl leading-tight text-[#1d1713] sm:text-3xl">
                {business.location.address}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {business.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full border border-[#1d1713]/10 bg-white/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#756a62]"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-9 h-px bg-[#1d1713]/10" />

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5e3c] text-white">
                  <Clock3 size={17} />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
                  Opening hours
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-[#1d1713]/[0.07] pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold text-[#1d1713]">
                      {day}
                    </span>

                    <span className="text-right text-[11px] text-[#756a62]">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-9 h-px bg-[#1d1713]/10" />

            {/* Contact */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6b18a] text-[#1d1713]">
                  <MapPin size={17} />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
                  Café details
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-[#1d1713]/10 bg-white/50 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#756a62]/60">
                  Concept
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1d1713]">
                  {business.concept}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-[#1d1713]/10 bg-white/55 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b5e3c]/10 text-[#8b5e3c]">
              <Clock3 size={14} />
            </span>

            <p className="text-xs text-[#756a62]">
              <span className="font-semibold text-[#1d1713]">
                We're open.
              </span>{" "}
              {business.hoursShort}
            </p>
          </div>

          <a
            href={`tel:${business.contact.phoneTel}`}
            className="group inline-flex w-fit items-center gap-2 text-xs font-bold text-[#1d1713]"
          >
            Call the café

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;