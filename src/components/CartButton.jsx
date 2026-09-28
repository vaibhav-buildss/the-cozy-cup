import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

function CartButton({ onClick }) {
  const { itemCount, cartTotal, formatPrice } = useCart();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex h-11 items-center gap-2 rounded-full border border-[#1d1713]/10 bg-white/70 px-4 text-[#1d1713] shadow-sm backdrop-blur-md transition hover:border-[#8b5e3c]/25 hover:bg-white"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <div className="relative">
        <ShoppingBag
          size={17}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:scale-105"
        />

        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#8b5e3c] px-1 text-[9px] font-bold text-white"
          >
            {itemCount > 99 ? "99+" : itemCount}
          </motion.span>
        )}
      </div>

      <div className="hidden text-left sm:block">
        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#756a62]/60">
          Your order
        </p>

        <p className="mt-0.5 text-[11px] font-bold text-[#1d1713]">
          {itemCount === 0
            ? "Cart is empty"
            : formatPrice(cartTotal)}
        </p>
      </div>
    </motion.button>
  );
}

export default CartButton;