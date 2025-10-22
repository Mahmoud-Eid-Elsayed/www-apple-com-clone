// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import FixedNav from "./components/nav/FixedNav";
import StickyNav from "./components/nav/StickyNav";
import { Hero } from "./components/hero";
import { Carousel } from "./components/carousel/";
import ProductViewer from "./components/ProductViewer/ProductViewer";
import Phone3DViewer from "./components/Phone3DViewer/Phone3DViewer";
import Sections_A01 from "./components/Sections_A01/Sections";
import ChipScrollSection from "./components/ChipScrollSection/ChipScrollSection";
import ChipSection from "./components/ChipSection/ChipSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [showLocalNav, setShowLocalNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowLocalNav(window.scrollY > 160);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- make sure you give the viewer a real color array ----
  const phoneItem = {
    color: ["#1D1D1F"], // black (or "#fff", "#D4AF37", etc.)
    // img: "/images/iphone-black.png",   // not used any more
  };

  return (
    <>
      <FixedNav visible={!showLocalNav} />
      <StickyNav visible={showLocalNav} />
      <Hero />
      <Carousel />
      <div style={{ height: 100 }} />
      <ProductViewer />
      <div style={{ height: 100 }} />
      <Phone3DViewer item={phoneItem} />
      <Sections_A01 />
      <ChipScrollSection />
      <ChipSection />
      <div style={{ height: 50 }} />
      <Footer />
    </>
  );
}

export default App;