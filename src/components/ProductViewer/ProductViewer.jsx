import React, { useState, useEffect, useRef } from "react";
import "./ProductViewer.css";

const colors = [
  {
    value: "all-colors",
    image:
      "https://www.apple.com/euro/iphone-16-pro/a/screens_alt/images/overview/product-viewer/iphone-pro/all_colors__fdpduog7urm2_xlarge.jpg",
    ariaLabel: "6.3” iPhone 16 Pro 1 in four colours",
    label: "6.3” iPhone 16 Pro<sup>1</sup> in four colours",
  },
  {
    value: "TiBlack",
    image:
      "https://www.apple.com/euro/iphone-16-pro/a/screens_alt/images/overview/product-viewer/iphone-pro/black_titanium__ezezv5esulua_xlarge.jpg",
    ariaLabel: "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro in Black Titanium",
    label:
      "6.9” iPhone 16 Pro Max<sup>1</sup> & 6.3” iPhone 16 Pro<sup>1</sup> in Black Titanium",
  },
  {
    value: "TiWhite",
    image:
      "https://www.apple.com/euro/iphone-16-pro/a/screens_alt/images/overview/product-viewer/iphone-pro/white_titanium__b0s9tw63hs4i_xlarge.jpg",
    ariaLabel: "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro in White Titanium",
    label:
      "6.9” iPhone 16 Pro Max<sup>1</sup> & 6.3” iPhone 16 Pro<sup>1</sup> in White Titanium",
  },
  {
    value: "TiGray",
    image:
      "https://www.apple.com/euro/iphone-16-pro/a/screens_alt/images/overview/product-viewer/iphone-pro/natural_titanium__22ovjg0i0huy_xlarge.jpg",
    ariaLabel:
      "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro in Natural Titanium",
    label:
      "6.9” iPhone 16 Pro Max<sup>1</sup> & 6.3” iPhone 16 Pro<sup>1</sup> in Natural Titanium",
  },
  {
    value: "TiRose",
    image:
      "https://www.apple.com/euro/iphone-16-pro/a/screens_alt/images/overview/product-viewer/iphone-pro/desert_titanium__gcg1i94xakuq_xlarge.jpg",
    ariaLabel: "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro in Desert Titanium",
    label:
      "6.9” iPhone 16 Pro Max<sup>1</sup> & 6.3” iPhone 16 Pro<sup>1</sup> in Desert Titanium",
  },
];

const ProductViewer = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [navStyle, setNavStyle] = useState({ opacity: 0, bottom: '20px' });
  const sectionRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !navRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const BOTTOM_OFFSET = 20;

      // السكشن داخل الشاشة
      if (rect.top < windowHeight && rect.bottom > 0) {
        // لو وصل لنهاية السكشن، نثبته عند حدود السكشن
        if (rect.bottom < windowHeight) {
          const diff = windowHeight - rect.bottom + BOTTOM_OFFSET;
          setNavStyle({ opacity: 1, bottom: `${diff}px` });
        } else {
          setNavStyle({ opacity: 1, bottom: `${BOTTOM_OFFSET}px` });
        }
      } else {
        setNavStyle({ opacity: 0, bottom: `${BOTTOM_OFFSET}px` });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <section ref={sectionRef} className="product-viewer-section">
      <header className="product-viewer-header">
        <h1 className="product-viewer-title">Take a closer look.</h1>
        <div className="product-viewer-cta" />
      </header>

      <div className="product-viewer-content">
        <div className="product-viewer-image-container">
          <img
            src={selectedColor.image}
            alt={selectedColor.ariaLabel}
            className="product-viewer-image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Controller - Fixed Bottom داخل حدود السكشن */}
      <div
        ref={navRef}
        className="product-viewer-nav-container"
        style={{
          opacity: navStyle.opacity,
          bottom: navStyle.bottom,
        }}
      >
        <div
          className="product-viewer-label"
          dangerouslySetInnerHTML={{ __html: selectedColor.label }}
        />
        <div className="product-viewer-colornav">
          <ul className="colornav-items" role="radiogroup">
            {colors.map((color) => (
              <li key={color.value} className="colornav-item">
                <input
                  type="radio"
                  id={`color-${color.value}`}
                  name="color-selector"
                  value={color.value}
                  checked={selectedColor.value === color.value}
                  onChange={() => handleColorChange(color)}
                  className="colornav-input"
                  aria-label={color.ariaLabel}
                />
                <label
                  htmlFor={`color-${color.value}`}
                  className={`colornav-label ${selectedColor.value === color.value
                      ? "colornav-label-active"
                      : ""
                    } ${color.value}`}
                >
                  <span className="colornav-swatch-text" aria-hidden />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;