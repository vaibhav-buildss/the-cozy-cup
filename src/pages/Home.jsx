import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Featured from "../sections/Featured";
import Menu from "../sections/Menu";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Gallery from "../sections/Gallery";
import Reviews from "../sections/Reviews";
import Location from "../sections/Location";
import Contact from "../sections/Contact";

function Home() {
  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#1d1713]">
      <Navbar />

      <main>
        <Hero />

        <Featured />

        <Menu />

        <About />

        <Experience />

        <Gallery />

        <Reviews />

        <Location />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;