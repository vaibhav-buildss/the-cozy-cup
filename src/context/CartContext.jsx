import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "cafe-template-cart";

function getInitialCart() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart);

  // Save cart between page refreshes.
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cart)
      );
    } catch {
      // Ignore storage errors.
    }
  }, [cart]);

  // Add item to cart.
  const addToCart = (item) => {
    if (!item || !item.id) return;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // Remove one quantity.
  const decreaseQuantity = (itemId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id !== itemId) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Add one quantity.
  const increaseQuantity = (itemId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Remove item completely.
  const removeFromCart = (itemId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== itemId)
    );
  };

  // Empty entire cart.
  const clearCart = () => {
    setCart([]);
  };

  // Find quantity of a specific item.
  const getItemQuantity = (itemId) => {
    const item = cart.find(
      (cartItem) => cartItem.id === itemId
    );

    return item?.quantity || 0;
  };

  // Number of individual items.
  const itemCount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  // Total price.
  const cartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + Number(item.price || 0) * item.quantity,
      0
    );
  }, [cart]);

  // Format currency.
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const value = {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    getItemQuantity,
    itemCount,
    cartTotal,
    formatPrice,
    isCartEmpty: cart.length === 0,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider."
    );
  }

  return context;
}

export default CartContext;