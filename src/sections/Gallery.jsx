import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import gallery, {
  galleryCategories,
} from "../data/gallery";
import SafeImage from "../components/SafeImage";

function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") {
      return gallery;
    }

    return gallery.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const getSizeClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";

      case "medium":
        return "md:row-span-2";

      default:
        return "";
    }
  };

  const selectedIndex = selectedImage
    ? filteredGallery.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (selectedIndex === -1) return;

    const previousIndex =
      selectedIndex === 0
        ? filteredGallery.length - 1
        : selectedIndex - 1;

    setSelectedImage(
      filteredGallery[previousIndex]
    );
  };

  const showNext = () => {
    if (selectedIndex === -1) return;

    const nextIndex =
      selectedIndex === filteredGallery.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(
      filteredGallery[nextIndex]
    );
  };

  return (
    <section
      id="gallery"
      className="cafe-section bg-[#fbf8f3]"
    >
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
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="cafe-eyebrow">
              Inside the café
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.03em] text-[#1d1713] sm:text-6xl lg:text-7xl">
              A little look
              <span className="block italic text-[#8b5e3c]">
                around.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#756a62] sm:text-base">
              The coffee, the food, the space and the little
              details that make the experience feel like home.
            </p>
          </div>

          {/* FILTERS */}

          <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
            {galleryCategories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.13em] transition ${
                    active
                      ? "bg-[#1d1713] text-[#f5efe6]"
                      : "border border-[#1d1713]/10 bg-white/60 text-[#756a62] hover:bg-white hover:text-[#1d1713]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* GALLERY */}

        <motion.div
          layout
          className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() =>
                  setSelectedImage(item)
                }
                className={`group relative overflow-hidden rounded-[1.25rem] bg-[#eee7de] text-left ${getSizeClass(
                  item.size
                )}`}
                aria-label={`Open ${item.alt}`}
              >
                {/* IMAGE */}

                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.055]"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* CATEGORY */}

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100">
                    {item.category}
                  </span>
                </div>

                {/* BOTTOM */}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <p className="text-xs font-medium text-white opacity-0 transition duration-500 group-hover:opacity-100">
                    {item.alt}
                  </p>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100">
                    <Expand size={14} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY */}

        {filteredGallery.length === 0 && (
          <div className="mt-8 flex min-h-[300px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#1d1713]/15 bg-white/40 text-center">
            <p className="font-display text-3xl">
              Nothing here yet.
            </p>

            <p className="mt-2 text-xs text-[#756a62]">
              Add gallery images for this category.
            </p>
          </div>
        )}

        {/* LIGHTBOX */}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0a08]/95 p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={() =>
                  setSelectedImage(null)
                }
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                aria-label="Close gallery"
              >
                <X size={19} />
              </button>

              {/* PREVIOUS */}

              {filteredGallery.length > 1 && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-7"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={18} />
                </button>
              )}

              {/* IMAGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.35,
                }}
                onClick={(event) =>
                  event.stopPropagation()
                }
                className="relative max-h-[88vh] max-w-[1100px] overflow-hidden rounded-[1.5rem] bg-[#eee7de] shadow-2xl"
              >
                <SafeImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[78vh] w-auto max-w-[90vw] object-contain sm:max-h-[82vh]"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-14">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/50">
                        {selectedImage.category}
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        {selectedImage.alt}
                      </p>
                    </div>

                    <p className="shrink-0 text-[9px] font-semibold text-white/40">
                      {selectedIndex + 1} /{" "}
                      {filteredGallery.length}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* NEXT */}

              {filteredGallery.length > 1 && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7"
                  aria-label="Next image"
                >
                  <ArrowRight size={18} />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOT NOTE */}

        <div className="mt-8 flex items-center justify-between border-t border-[#1d1713]/10 pt-5">
          <p className="text-[9px] leading-5 text-[#756a62]/65">
            Tap any image to explore it in full.
          </p>

          <span className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-[#8b5e3c] sm:block">
            {filteredGallery.length}{" "}
            {filteredGallery.length === 1
              ? "photo"
              : "photos"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Gallery;