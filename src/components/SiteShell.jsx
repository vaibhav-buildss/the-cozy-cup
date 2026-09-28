import Navbar from "./Navbar";
import Footer from "./Footer";

function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#1d1713]">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default SiteShell;