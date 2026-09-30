import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import SiteShell from "./components/SiteShell";

function AppContent() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = window.location.hash;
      setPage(nextHash);

      // Section links (#about, #menu, etc.) should be handled by the
      // browser's native anchor scrolling. Only full-page views such as
      // the cart and checkout should jump back to the top.
      if (nextHash === "#cart" || nextHash === "#checkout") {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  if (page === "#cart") {
    return (
      <SiteShell>
        <CartPage />
      </SiteShell>
    );
  }

  if (page === "#checkout") {
    return (
      <SiteShell>
        <Checkout />
      </SiteShell>
    );
  }

  return <Home />;
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;