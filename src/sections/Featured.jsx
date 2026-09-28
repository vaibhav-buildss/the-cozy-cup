import { useMemo } from "react";
import {
  ArrowUpRight,
  Check,
  Leaf,
  Plus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import business from "../data/business";
import { useCart } from "../context/CartContext";
import SafeImage from "../components/SafeImage";

function Featured() {
  const { addToCart, getItemQuantity, formatPrice } = useCart();

  const featuredItems = useMemo(() => {
    return business.featuredItems || [];
  }, []);

  if (!featuredItems.length) {
    return null;
  }

  const mainItem = featuredItems[0];
  const secondaryItems = featuredItems.slice(1);

  return (
    <section className="cafe-section bg-[#f5efe6]">
      <div className="cafe-container">
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="cafe-eyebrow">
              From the kitchen
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.03em] text-[#1d1713] sm:text-6xl lg:text-7xl">
              A few favourites,
              <span className="block italic text-[#8b5e3c]">
                chosen for you.
              </span>
            </h2>
          </div>

          <a
            href="#menu"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#1d1713]/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d1713] transition hover:bg-[#1d1713] hover:text-white"
          >
            View full menu

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* FEATURED GRID */}

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* MAIN FEATURE */}

          <motion.article
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[580px] overflow-hidden rounded-[2rem] bg-[#1d1713]"
          >
            <div className="absolute inset-0">
              <SafeImage
                src={mainItem.image}
                alt={mainItem.name}
                className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045]"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

            {/* TAG */}

            <div className="absolute left-6 top-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-xl">
                <Sparkles size={11} />
                {mainItem.tag || "Featured"}
              </span>
            </div>

            {/* CONTENT */}

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-xl">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                      {mainItem.category || "Signature"}
                    </p>

                    <h3 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                      {mainItem.name}
                    </h3>
                  </div>

                  <p className="font-display text-3xl font-semibold text-[#f5efe6]">
                    {formatPrice(mainItem.price)}
                  </p>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
                  {mainItem.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {mainItem.vegetarian && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[8px] font-semibold text-white/75 backdrop-blur-md">
                      <Leaf
                        size={11}
                        className="text-[#b9cf91]"
                      />
                      Vegetarian
                    </span>
                  )}

                  {mainItem.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[8px] font-semibold text-white/70 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => addToCart(mainItem)}
                    className="group/button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5efe6] px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1d1713] transition hover:bg-white"
                  >
                    {getItemQuantity(mainItem.id) > 0 ? (
                      <>
                        <Check size={14} />
                        Added to order
                      </>
                    ) : (
                      <>
                        <Plus
                          size={14}
                          className="transition-transform duration-300 group-hover/button:rotate-90"
                        />
                        Add to order
                      </>
                    )}
                  </button>

                  {getItemQuantity(mainItem.id) > 0 && (
                    <span className="flex h-12 min-w-12 items-center justify-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 text-[10px] font-bold text-white backdrop-blur-md">
                      <ShoppingBag size={13} />
                      {getItemQuantity(mainItem.id)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.article>

          {/* SECONDARY ITEMS */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryItems.map((item, index) => {
              const quantity = getItemQuantity(item.id);

              return (
                <motion.article
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group cafe-card overflow-hidden rounded-[2rem]"
                >
                  <div className="grid h-full grid-cols-[42%_58%]">
                    {/* IMAGE */}

                    <div className="relative min-h-[260px] overflow-hidden bg-[#eee7de]">
                      <SafeImage
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-[#f5efe6]/95 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#1d1713] shadow-lg backdrop-blur-md">
                          {item.tag || "Favourite"}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#8b5e3c]">
                            {item.category || "Menu"}
                          </p>

                          {item.vegetarian && (
                            <Leaf
                              size={13}
                              className="shrink-0 text-[#71884e]"
                            />
                          )}
                        </div>

                        <h3 className="mt-3 font-display text-2xl leading-[0.95] text-[#1d1713] sm:text-3xl">
                          {item.name}
                        </h3>

                        <p className="mt-3 text-[11px] leading-5 text-[#756a62]">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-display text-2xl font-bold text-[#5a3824]">
                            {formatPrice(item.price)}
                          </span>

                          {quantity > 0 && (
                            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#f1e9df] px-2 text-[9px] font-bold text-[#8b5e3c]">
                              {quantity}
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => addToCart(item)}
                          className={`mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-full text-[9px] font-bold uppercase tracking-[0.12em] transition ${
                            quantity > 0
                              ? "bg-[#8b5e3c] text-white hover:bg-[#5a3824]"
                              : "bg-[#1d1713] text-[#f5efe6] hover:bg-[#5a3824]"
                          }`}
                        >
                          {quantity > 0 ? (
                            <>
                              <Check size={13} />
                              Added
                            </>
                          ) : (
                            <>
                              <Plus size={13} />
                              Add to order
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* SMALL NOTE */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-8 flex items-center justify-between gap-5 border-t border-[#1d1713]/10 pt-5"
        >
          <p className="max-w-xl text-[9px] leading-5 text-[#756a62]/70">
            Menu items, prices and availability are fully
            configurable from the café data file.
          </p>

          <a
            href="#menu"
            className="hidden shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8b5e3c] transition hover:text-[#5a3824] sm:inline-flex"
          >
            Explore everything
            <ArrowRightIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return <ArrowUpRight size={13} />;
}

export default Featured;