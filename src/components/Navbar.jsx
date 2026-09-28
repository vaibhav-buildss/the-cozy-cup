import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import business from "../data/business";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { itemCount } = useCart();

  const closeMenu = () => {
    setOpen(false);
  };

  const openCart = () => {
    setOpen(false);
    setCartOpen(true);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="rounded-full border border-white/20 bg-[#1d1713]/90 px-3 py-2 text-white shadow-2xl shadow-black/10 backdrop-blur-xl">
            <div className="flex h-14 items-center justify-between">
              {/* Brand */}
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center gap-3 px-3"
                aria-label={business.name}
              >
                <div className="h-9 w-9 overflow-hidden rounded-full bg-[#f5efe6]">
                  <img
                    src="/images/branding/logo.jpg"
                    alt="THE COZY CUP logo"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="hidden sm:block">
                  <p className="font-display text-lg leading-none">
                    {business.shortName}
                  </p>

                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Café & Kitchen
                  </p>
                </div>
              </a>

              {/* Desktop navigation */}
              <div className="hidden items-center gap-1 lg:flex">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-2 text-xs font-medium text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Desktop actions */}
              <div className="hidden items-center gap-2 lg:flex">
                {/* Cart */}
                <motion.button
                  type="button"
                  onClick={openCart}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  aria-label={`Open cart${
                    itemCount
                      ? ` with ${itemCount} items`
                      : ""
                  }`}
                >
                  <ShoppingBag size={16} />

                  {itemCount > 0 && (
                    <motion.span
                      key={itemCount}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6b18a] px-1 text-[8px] font-bold text-[#1d1713]"
                    >
                      {itemCount > 99 ? "99+" : itemCount}
                    </motion.span>
                  )}
                </motion.button>

                {/* Order button */}
                <button
                  type="button"
                  onClick={openCart}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#f5efe6] px-5 py-3 text-xs font-bold text-[#1d1713] transition hover:bg-white"
                >
                  Order now

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
                aria-label={
                  open ? "Close menu" : "Open menu"
                }
                aria-expanded={open}
              >
                {open ? (
                  <X size={19} />
                ) : (
                  <Menu size={19} />
                )}
              </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="border-t border-white/10 px-3 pb-4 pt-3">
                    {links.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/65 last:border-b-0"
                      >
                        {link.label}

                        <ArrowUpRight
                          size={15}
                          className="text-white/25"
                        />
                      </motion.a>
                    ))}

                    {/* Mobile cart */}
                    <button
                      type="button"
                      onClick={openCart}
                      className="mt-3 flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-xs font-bold text-white"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag size={15} />
                        Your order
                      </span>

                      <span className="flex items-center gap-2">
                        {itemCount > 0 && (
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6b18a] px-1 text-[8px] font-bold text-[#1d1713]">
                            {itemCount}
                          </span>
                        )}

                        <ArrowUpRight size={15} />
                      </span>
                    </button>

                    {/* Mobile order */}
                    <button
                      type="button"
                      onClick={openCart}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#f5efe6] px-5 py-3 text-xs font-bold text-[#1d1713]"
                    >
                      Order now
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </header>

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}

export default Navbar;