import { ArrowUpRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import reviews from "../data/reviews";

function Stars({ rating = 5 }) {
  const safeRating = Number(rating) || 0;

  return (
    <div className="flex gap-1" aria-label={`${safeRating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          className={
            star <= safeRating
              ? "fill-[#b47a4b] text-[#b47a4b]"
              : "text-[#b47a4b]/20"
          }
        />
      ))}
    </div>
  );
}

function Reviewer({ review }) {
  if (!review) return null;

  const name = review.name || "Guest";
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6d8c9] font-display text-lg text-[#5a3824]">
        {initial}
      </div>

      <div>
        <p className="text-xs font-bold text-[#1d1713]">{name}</p>
        <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#756a62]/60">
          {review.profile || "Customer"}
        </p>
      </div>
    </div>
  );
}

function Reviews() {
  const safeReviews = Array.isArray(reviews) ? reviews.filter(Boolean) : [];
  const featured = safeReviews[0];
  const secondaryReviews = safeReviews.slice(1, 4);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#f1e9df] py-24 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute -right-20 top-20 font-display text-[28rem] leading-none text-[#8b5e3c]/[0.035]">
        “
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="cafe-eyebrow">Guest notes</div>

            <h2 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.9] tracking-[-0.035em] text-[#1d1713] sm:text-6xl lg:text-8xl">
              A few words
              <span className="block italic text-[#8b5e3c]">
                from our guests.
              </span>
            </h2>
          </motion.div>

          <p className="max-w-sm text-xs leading-6 text-[#756a62]">
            Fictional customer testimonials created for this academic café
            project.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 flex items-center gap-4 border-y border-[#1d1713]/10 py-5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d1713] text-[#f5efe6]">
            <Quote size={17} />
          </div>

          <div>
            <p className="text-xs font-bold text-[#1d1713]">
              Fictional testimonials
            </p>
            <p className="mt-1 text-[10px] text-[#756a62]">
              Part of THE COZY CUP's imaginary brand content.
            </p>
          </div>
        </motion.div>

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#1d1713] p-7 text-white sm:p-10 lg:p-14"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8b5e3c]/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Quote size={38} strokeWidth={1.2} className="text-[#d6b18a]" />
                <p className="mt-7 max-w-5xl font-display text-3xl font-medium leading-[1.15] text-[#f5efe6] sm:text-4xl lg:text-5xl">
                  “{featured.text}”
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 lg:items-end">
                <Stars rating={featured.rating} />
                <Reviewer review={featured} />
              </div>
            </div>
          </motion.article>
        )}

        {secondaryReviews.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {secondaryReviews.map((review, index) => (
              <motion.article
                key={review.id || `review-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex min-h-[250px] flex-col rounded-[1.75rem] border border-[#1d1713]/10 bg-white/55 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#5a3824]/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <Stars rating={review.rating} />
                  <Quote size={18} className="text-[#8b5e3c]/25" />
                </div>

                <p className="mt-6 flex-1 text-sm leading-6 text-[#756a62]">
                  “{review.text}”
                </p>

                <div className="mt-7 border-t border-[#1d1713]/10 pt-5">
                  <Reviewer review={review} />
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-xs leading-5 text-[#756a62]">
            The people who visit make the café what it is.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-bold text-[#1d1713]"
          >
            Come experience it yourself
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;
