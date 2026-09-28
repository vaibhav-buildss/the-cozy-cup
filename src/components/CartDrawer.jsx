import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import SafeImage from "./SafeImage";

function CartDrawer({ open, onClose }) {
  const {
    cart,
    cartTotal,
    itemCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    formatPrice,
    isCartEmpty,
  } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] cursor-default bg-black/45 backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 34,
            }}
            className="fixed right-0 top-0 z-[100] flex h-dvh w-full max-w-md flex-col bg-[#fbf8f3] text-[#1d1713] shadow-2xl"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#1d1713]/10 px-5 py-5 sm:px-7">
              <div>
                <div className="flex items-center gap-2">
                  <ShoppingBag
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#8b5e3c]"
                  />

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8b5e3c]">
                    Your order
                  </p>
                </div>

                <h2 className="mt-1 font-serif text-3xl font-medium">
                  Cart
                  {itemCount > 0 && (
                    <span className="ml-2 align-middle font-sans text-xs font-semibold text-[#8a8179]">
                      ({itemCount})
                    </span>
                  )}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d1713]/10 transition hover:border-[#1d1713]/25 hover:bg-[#eee7de]"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              {isCartEmpty ? (
                <div className="flex min-h-full flex-col items-center justify-center px-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#8b5e3c]/20 bg-[#eee7de]">
                    <ShoppingBag
                      size={24}
                      strokeWidth={1.25}
                      className="text-[#8b5e3c]"
                    />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#7a7169]">
                    Add something delicious from our menu and it'll appear
                    here.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 inline-flex items-center gap-3 bg-[#1d1713] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#8b5e3c]"
                  >
                    Explore menu
                    <ArrowRight size={14} strokeWidth={1.6} />
                  </button>
                </div>
              ) : (
                <div className="px-5 py-5 sm:px-7">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        layout
                        key={item.id}
                        className="border-b border-[#1d1713]/10 pb-4 last:border-b-0"
                      >
                        <div className="flex gap-4">
                          {/* Product image */}
                          <div className="h-20 w-20 shrink-0 overflow-hidden bg-[#eee7de]">
                            <SafeImage
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Product info */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <h3 className="truncate font-serif text-lg font-semibold">
                                  {item.name}
                                </h3>

                                {item.category && (
                                  <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#8b5e3c]">
                                    {item.category}
                                  </p>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                aria-label={`Remove ${item.name}`}
                                className="shrink-0 text-[#9a9189] transition hover:text-red-700"
                              >
                                <Trash2
                                  size={15}
                                  strokeWidth={1.5}
                                />
                              </button>
                            </div>

                            <div className="mt-3 flex items-center justify-between gap-3">
                              {/* Quantity controls */}
                              <div className="flex h-8 items-center border border-[#1d1713]/15">
                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseQuantity(item.id)
                                  }
                                  aria-label={`Decrease ${item.name}`}
                                  className="flex h-full w-8 items-center justify-center transition hover:bg-[#eee7de]"
                                >
                                  <Minus size={12} strokeWidth={1.7} />
                                </button>

                                <span className="flex h-full min-w-8 items-center justify-center border-x border-[#1d1713]/10 px-2 text-xs font-semibold">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    increaseQuantity(item.id)
                                  }
                                  aria-label={`Increase ${item.name}`}
                                  className="flex h-full w-8 items-center justify-center transition hover:bg-[#eee7de]"
                                >
                                  <Plus size={12} strokeWidth={1.7} />
                                </button>
                              </div>

                              <p className="font-serif text-lg font-semibold">
                                {formatPrice(
                                  Number(item.price || 0) *
                                    Number(item.quantity || 0)
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini note */}
                  <div className="mt-5 border border-[#8b5e3c]/15 bg-[#eee7de]/60 px-4 py-3">
                    <p className="text-[9px] leading-4 text-[#71675f]">
                      Prices shown are based on the current café menu. Final
                      availability and order confirmation will be handled by
                      the café.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {!isCartEmpty && (
              <div className="shrink-0 border-t border-[#1d1713]/10 bg-[#fbf8f3] px-5 pb-5 pt-4 sm:px-7 sm:pb-7">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a8179]">
                    Subtotal
                  </span>

                  <span className="font-serif text-2xl font-semibold">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <p className="mt-1 text-right text-[9px] text-[#8a8179]">
                  Taxes and delivery charges, if applicable, may be additional.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    window.location.hash = "checkout";
                  }}
                  className="group mt-5 flex w-full items-center justify-center gap-3 bg-[#1d1713] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-[#8b5e3c]"
                >
                  Continue to checkout

                  <ArrowRight
                    size={15}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;