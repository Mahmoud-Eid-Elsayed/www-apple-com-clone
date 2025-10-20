import { useEffect, useState } from "react";
import "./App.css";
import FixedNav from "./components/nav/FixedNav";
import StickyNav from "./components/nav/StickyNav";
import { Hero } from "./components/hero";
import { Carousel } from "./components/carousel/";
import Sections_A01 from "./components/Sections_A01/Sections";
import ChipSection from "./components/ChipSection/ChipSection";
import Footer from "./components/Footer/Footer";
import ChipScrollSection from "./components/ChipScrollSection/ChipScrollSection";


function App() {
  const [showLocalNav, setShowLocalNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowLocalNav(window.scrollY > 160);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <FixedNav visible={!showLocalNav} />
      <StickyNav visible={showLocalNav} />
      <Hero />
      <Carousel />
      <Sections_A01 />
      <ChipScrollSection />
      <ChipSection />
      <div style={{ height: 50 }} />
      <Footer />
    </>
  );
}

export default App;