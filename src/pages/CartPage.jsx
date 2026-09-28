import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cart,
    cartTotal,
    itemCount,
    isCartEmpty,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    formatPrice,
  } = useCart();

  if (isCartEmpty) {
    return (
      <main className="min-h-screen bg-[#fbf8f3] px-5 pb-20 pt-32 text-[#1d1713] sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[70vh] max-w-[900px] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f1e9df] text-[#8b5e3c]"
          >
            <ShoppingBag
              size={34}
              strokeWidth={1.4}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b5e3c]">
              Your order
            </p>

            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
              Nothing here yet.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#756a62]">
              Your cart is waiting for something delicious.
              Head back to the menu and find your favourites.
            </p>

            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1713] px-6 py-3.5 text-xs font-bold text-[#f5efe6] transition hover:bg-[#5a3824]"
            >
              Explore the menu
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbf8f3] px-5 pb-20 pt-32 text-[#1d1713] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#756a62] transition hover:text-[#1d1713]"
          >
            <ArrowLeft size={14} />
            Back to menu
          </a>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b5e3c]">
                Your order
              </p>

              <h1 className="mt-4 font-display text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
                Good choices.
              </h1>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1d1713]/10 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#756a62] transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <Trash2 size={13} />
              Clear cart
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Items */}
          <motion.section
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <div className="rounded-[2rem] border border-[#1d1713]/10 bg-white/55 p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#1d1713]/10 pb-5">
                <p className="text-xs font-bold">
                  {itemCount}{" "}
                  {itemCount === 1 ? "item" : "items"}
                </p>

                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#756a62]/60">
                  Your selections
                </p>
              </div>

              <div className="space-y-3">
                {cart.map((item) => (
                  <CartPageItem
                    key={item.id}
                    item={item}
                    onIncrease={() =>
                      increaseQuantity(item.id)
                    }
                    onDecrease={() =>
                      decreaseQuantity(item.id)
                    }
                    onRemove={() =>
                      removeFromCart(item.id)
                    }
                    formatPrice={formatPrice}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Summary */}
          <motion.aside
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
            className="h-fit rounded-[2rem] bg-[#1d1713] p-6 text-[#f5efe6] sm:p-8 lg:sticky lg:top-28"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
              Order summary
            </p>

            <h2 className="mt-4 font-display text-4xl leading-none">
              Almost there.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Subtotal</span>
                <span className="font-semibold text-white/80">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Taxes & charges</span>
                <span className="text-white/30">
                  At checkout
                </span>
              </div>

              <div className="my-5 h-px bg-white/10" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                    Estimated total
                  </p>

                  <p className="mt-1 font-display text-4xl text-[#f5efe6]">
                    {formatPrice(cartTotal)}
                  </p>
                </div>

                <span className="pb-1 text-[9px] uppercase tracking-[0.15em] text-white/25">
                  INR
                </span>
              </div>
            </div>

            <a
              href="#checkout"
              className="group mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#f5efe6] text-xs font-bold text-[#1d1713] transition hover:bg-white"
            >
              Continue to checkout

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <p className="mt-4 text-center text-[9px] leading-5 text-white/25">
              You'll be able to review your order before
              placing it.
            </p>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}

function CartPageItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  formatPrice,
}) {
  const quantity = item.quantity || 1;
  const lineTotal =
    Number(item.price || 0) * quantity;

  return (
    <motion.article
      layout
      className="flex flex-col gap-4 rounded-[1.5rem] border border-[#1d1713]/10 bg-white/65 p-3 sm:flex-row sm:items-center"
    >
      {/* Image */}
      <div className="h-32 w-full shrink-0 overflow-hidden rounded-[1.15rem] bg-[#e9dfd4] sm:h-28 sm:w-28">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#756a62]/40">
            <ShoppingBag size={22} />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1 px-1 sm:px-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8b5e3c]">
              {item.category || "Menu"}
            </p>

            <h3 className="mt-1 font-display text-2xl leading-none">
              {item.name}
            </h3>

            <p className="mt-2 text-[10px] text-[#756a62]">
              {formatPrice(item.price)} each
            </p>
          </div>

          <button
            type="button"
            onClick={onRemove}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#756a62]/45 transition hover:bg-red-50 hover:text-red-700"
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-[#1d1713]/10 bg-[#fbf8f3]">
            <button
              type="button"
              onClick={onDecrease}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#756a62] transition hover:bg-[#1d1713]/5 hover:text-[#1d1713]"
              aria-label="Decrease quantity"
            >
              <Minus size={13} />
            </button>

            <span className="min-w-8 text-center text-[11px] font-bold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={onIncrease}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#756a62] transition hover:bg-[#1d1713]/5 hover:text-[#1d1713]"
              aria-label="Increase quantity"
            >
              <Plus size={13} />
            </button>
          </div>

          <p className="font-display text-2xl font-semibold text-[#5a3824]">
            {formatPrice(lineTotal)}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default CartPage;