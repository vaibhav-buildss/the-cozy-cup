import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import business from "../data/business";
import { openWhatsAppOrder } from "../lib/whatsapp";

function Checkout() {
  const {
    cart,
    cartTotal,
    itemCount,
    isCartEmpty,
    formatPrice,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    orderType: "pickup",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isCartEmpty) return;

    openWhatsAppOrder({
      customer: {
        name: form.name,
        phone: form.phone,
      },
      cart,
      orderType: form.orderType,
      address: form.address,
      notes: form.notes,
    });

    // Clear the cart after preparing the WhatsApp order.
    clearCart();

    setSubmitted(true);
  };

  /* --------------------------------
     EMPTY CART
  -------------------------------- */

  if (isCartEmpty && !submitted) {
    return (
      <main className="min-h-screen bg-[#fbf8f3] px-5 pb-20 pt-32 text-[#1d1713] sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[70vh] max-w-[700px] flex-col items-center justify-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f1e9df] text-[#8b5e3c]">
            <ShoppingBag size={34} strokeWidth={1.4} />
          </div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b5e3c]">
            Checkout
          </p>

          <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
            Your cart is empty.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-[#756a62]">
            Add something delicious from the menu before heading to checkout.
          </p>

          <a
            href="#menu"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1713] px-6 py-3.5 text-xs font-bold text-[#f5efe6] transition hover:bg-[#5a3824]"
          >
            Back to menu
            <ArrowRight size={15} />
          </a>
        </div>
      </main>
    );
  }

  /* --------------------------------
     SUCCESS
  -------------------------------- */

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#fbf8f3] px-5 pb-20 pt-32 text-[#1d1713] sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[75vh] max-w-[700px] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e6d8c9] text-[#8b5e3c]"
          >
            <CheckCircle2 size={42} strokeWidth={1.5} />
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
              WhatsApp opened
            </p>

            <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
              Almost done.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#756a62]">
              Your order details have been prepared in WhatsApp. Send the
              message there to complete your order with the café.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1713] px-6 py-3.5 text-xs font-bold text-[#f5efe6] transition hover:bg-[#5a3824]"
              >
                Order something else
                <ArrowRight size={15} />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1d1713]/15 px-6 py-3.5 text-xs font-bold text-[#1d1713] transition hover:bg-[#1d1713] hover:text-white"
              >
                Back home
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  /* --------------------------------
     CHECKOUT
  -------------------------------- */

  return (
    <main className="min-h-screen bg-[#fbf8f3] px-5 pb-20 pt-32 text-[#1d1713] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
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
            href="#cart"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#756a62] transition hover:text-[#1d1713]"
          >
            <ArrowLeft size={14} />
            Back to cart
          </a>

          <div className="mt-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8b5e3c]">
              Checkout
            </p>

            <h1 className="mt-4 font-display text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
              Let's get your
              <span className="block italic text-[#8b5e3c]">
                order ready.
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Main */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_390px]">
          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
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
            className="rounded-[2rem] border border-[#1d1713]/10 bg-white/60 p-6 sm:p-8"
          >
            {/* CUSTOMER */}

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1713] text-[#f5efe6]">
                  <User size={16} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
                    Your details
                  </p>

                  <p className="mt-1 font-display text-2xl">
                    Who's ordering?
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />

                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            <div className="my-9 h-px bg-[#1d1713]/10" />

            {/* ORDER TYPE */}

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5e3c] text-white">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
                    Fulfilment
                  </p>

                  <p className="mt-1 font-display text-2xl">
                    How would you like it?
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    form.orderType === "pickup"
                      ? "border-[#8b5e3c]/40 bg-[#f1e9df]"
                      : "border-[#1d1713]/10 bg-white/50 hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="pickup"
                    checked={form.orderType === "pickup"}
                    onChange={handleChange}
                    className="sr-only"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold">Pickup</p>

                      <p className="mt-1 text-[10px] leading-5 text-[#756a62]">
                        Collect your order from the café.
                      </p>
                    </div>

                    <div
                      className={`h-4 w-4 rounded-full border ${
                        form.orderType === "pickup"
                          ? "border-[#8b5e3c] bg-[#8b5e3c]"
                          : "border-[#1d1713]/20"
                      }`}
                    />
                  </div>
                </label>

                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    form.orderType === "delivery"
                      ? "border-[#8b5e3c]/40 bg-[#f1e9df]"
                      : "border-[#1d1713]/10 bg-white/50 hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="delivery"
                    checked={form.orderType === "delivery"}
                    onChange={handleChange}
                    className="sr-only"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold">Delivery</p>

                      <p className="mt-1 text-[10px] leading-5 text-[#756a62]">
                        We'll confirm delivery availability.
                      </p>
                    </div>

                    <div
                      className={`h-4 w-4 rounded-full border ${
                        form.orderType === "delivery"
                          ? "border-[#8b5e3c] bg-[#8b5e3c]"
                          : "border-[#1d1713]/20"
                      }`}
                    />
                  </div>
                </label>
              </div>

              {form.orderType === "delivery" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  className="mt-4"
                >
                  <Field
                    label="Delivery address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address"
                    required
                  />
                </motion.div>
              )}
            </div>

            <div className="my-9 h-px bg-[#1d1713]/10" />

            {/* NOTES */}

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6b18a] text-[#1d1713]">
                  <MessageCircle size={16} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#756a62]">
                    Almost there
                  </p>

                  <p className="mt-1 font-display text-2xl">
                    Anything else?
                  </p>
                </div>
              </div>

              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Special requests, preferences or anything you'd like us to know..."
                className="mt-7 w-full resize-none rounded-2xl border border-[#1d1713]/10 bg-white/60 px-4 py-4 text-sm leading-6 outline-none transition placeholder:text-[#756a62]/40 focus:border-[#8b5e3c]/40 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="group mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#1d1713] px-6 text-xs font-bold text-[#f5efe6] transition hover:bg-[#5a3824]"
            >
              Place order on WhatsApp

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <p className="mt-4 text-center text-[9px] leading-5 text-[#756a62]/60">
              Your order will be sent to the café through WhatsApp for
              confirmation.
            </p>
          </motion.form>

          {/* SUMMARY */}

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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Your order
                </p>

                <h2 className="mt-3 font-display text-3xl">
                  {itemCount}{" "}
                  {itemCount === 1 ? "item" : "items"}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShoppingBag size={16} />
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-3 last:border-0"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white/80">
                      {item.quantity} × {item.name}
                    </p>

                    <p className="mt-1 text-[9px] text-white/30">
                      {formatPrice(item.price)} each
                    </p>
                  </div>

                  <p className="shrink-0 text-xs font-semibold text-white/70">
                    {formatPrice(
                      Number(item.price || 0) * item.quantity
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex items-center justify-between">
              <p className="text-xs text-white/45">
                Estimated total
              </p>

              <p className="font-display text-3xl text-[#f5efe6]">
                {formatPrice(cartTotal)}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">
                Demo checkout
              </p>
              <p className="mt-1 text-xs leading-5 text-white/50">
                Contact and WhatsApp details have not been provided yet.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------
   REUSABLE FIELD
-------------------------------- */

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={`checkout-${name}`}
        className="mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] text-[#756a62]"
      >
        {label}
      </label>

      <input
        id={`checkout-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-14 w-full rounded-2xl border border-[#1d1713]/10 bg-white/60 px-4 text-sm text-[#1d1713] outline-none transition placeholder:text-[#756a62]/40 focus:border-[#8b5e3c]/40 focus:bg-white"
      />
    </div>
  );
}

export default Checkout;