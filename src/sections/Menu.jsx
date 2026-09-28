import { useMemo, useState } from "react";
import {
  Check,
  Leaf,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import menu, { menuCategories } from "../data/menu";
import { useCart } from "../context/CartContext";
import SafeImage from "../components/SafeImage";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const {
    addToCart,
    getItemQuantity,
    formatPrice,
  } = useCart();

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menu.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesSearch &&
        item.available !== false
      );
    });
  }, [activeCategory, search]);

  return (
    <section
      id="menu"
      className="cafe-section cafe-grain bg-[#fbf8f3]"
    >
      <div className="cafe-container">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="cafe-eyebrow">
              Our menu
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.03em] text-[#1d1713] sm:text-6xl lg:text-7xl">
              Something for
              <span className="block italic text-[#8b5e3c]">
                every mood.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#756a62] sm:text-base">
              From carefully brewed coffee to comforting food and
              something sweet for later, explore the menu and build
              your order.
            </p>
          </div>

          {/* SEARCH */}

          <div className="relative w-full lg:max-w-[300px]">
            <Search
              size={17}
              strokeWidth={1.7}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#756a62]/60"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search the menu..."
              className="h-12 w-full rounded-full border border-[#1d1713]/10 bg-white/70 pl-11 pr-5 text-xs text-[#1d1713] outline-none backdrop-blur-md transition placeholder:text-[#756a62]/50 focus:border-[#8b5e3c]/40 focus:bg-white"
            />
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {menuCategories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`shrink-0 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition ${
                  active
                    ? "bg-[#1d1713] text-[#f5efe6] shadow-lg shadow-black/10"
                    : "border border-[#1d1713]/10 bg-white/50 text-[#756a62] hover:border-[#1d1713]/20 hover:bg-white hover:text-[#1d1713]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* RESULT COUNT */}

        <div className="mt-8 flex items-center justify-between border-b border-[#1d1713]/10 pb-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
            {filteredItems.length}{" "}
            {filteredItems.length === 1
              ? "item"
              : "items"}
          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8b5e3c] transition hover:text-[#5a3824]"
            >
              Clear search
            </button>
          )}
        </div>

        {/* MENU GRID */}

        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredItems.map((item, index) => {
                const quantity =
                  getItemQuantity(item.id);

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.04, 0.2),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group cafe-card cafe-card-hover overflow-hidden rounded-[1.5rem]"
                  >
                    {/* IMAGE */}

                    <div className="relative aspect-[4/3] overflow-hidden bg-[#eee7de]">
                      <SafeImage
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                      />

                      {/* IMAGE OVERLAY */}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                      {/* TAGS */}

                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        {item.bestseller && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5efe6]/95 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#1d1713] shadow-lg backdrop-blur-md">
                            <Sparkles size={10} />
                            Bestseller
                          </span>
                        )}

                        {item.vegetarian && (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5efe6]/95 text-[#5f7547] shadow-lg backdrop-blur-md">
                            <Leaf size={12} />
                          </span>
                        )}
                      </div>

                      {/* CATEGORY */}

                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display text-2xl leading-none text-[#1d1713]">
                            {item.name}
                          </h3>

                          <p className="mt-3 text-xs leading-5 text-[#756a62]">
                            {item.description}
                          </p>
                        </div>

                        <span className="cafe-price shrink-0">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* TAGS */}

                      {item.tags?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#f1e9df] px-2.5 py-1 text-[8px] font-semibold text-[#8b5e3c]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* ACTION */}

                      <div className="mt-5 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            addToCart(item)
                          }
                          className={`group/button flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] transition ${
                            quantity > 0
                              ? "bg-[#8b5e3c] text-white hover:bg-[#5a3824]"
                              : "bg-[#1d1713] text-[#f5efe6] hover:bg-[#5a3824]"
                          }`}
                        >
                          {quantity > 0 ? (
                            <>
                              <Check size={14} />

                              Added
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

                        {quantity > 0 && (
                          <div className="flex h-11 min-w-11 items-center justify-center gap-1 rounded-full border border-[#8b5e3c]/20 bg-[#f1e9df] px-3 text-xs font-bold text-[#8b5e3c]">
                            <ShoppingBag size={13} />
                            {quantity}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            /* EMPTY SEARCH */

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 flex min-h-[300px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#1d1713]/15 bg-white/40 px-6 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e9df] text-[#8b5e3c]">
                <Search size={22} />
              </div>

              <h3 className="mt-5 font-display text-3xl">
                Nothing found.
              </h3>

              <p className="mt-2 max-w-sm text-xs leading-6 text-[#756a62]">
                Try a different search term or browse another
                menu category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-full border border-[#1d1713]/15 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] transition hover:bg-[#1d1713] hover:text-white"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM ORDER STRIP */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          }}
          className="mt-12 overflow-hidden rounded-[1.5rem] bg-[#1d1713] text-[#f5efe6]"
        >
          <div className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Ready to order?
              </p>

              <p className="mt-2 font-display text-2xl sm:text-3xl">
                Build your order and send it directly on WhatsApp.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 text-white/50">
              <ShoppingBag size={18} />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                Add items above
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Menu;