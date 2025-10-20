import { useEffect, useRef } from "react";

export default function Hero({
  tiltDegrees = 5,
  easing = "cubic-bezier(0.4, 0.0, 0.2, 1)",
}) {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play(); // Auto-play and loop
    }

    // Optional: Add hover tilt for 3D feel
    const wrap = wrapRef.current;
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth: w, innerHeight: h } = window;
      const tiltX = (clientY / h - 0.5) * tiltDegrees;
      const tiltY = (clientX / w - 0.5) * tiltDegrees;
      video.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    };
    const onMouseLeave = () => {
      video.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    };
    wrap.addEventListener('mousemove', onMouseMove);
    wrap.addEventListener('mouseleave', onMouseLeave);
    return () => {
      wrap.removeEventListener('mousemove', onMouseMove);
      wrap.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [tiltDegrees]);

  return (
    <section
      aria-label="iPhone 16 Pro hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        width: "99.5vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        minHeight: "100vh",
        "--fade-ease": easing,
      }}
    >
      <style>
        {`
          .hero-wrap { 
            position: relative; 
            min-height: 100vh; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            perspective: 1200px; 
            overflow: hidden; 
          }
          .hero-video { 
            position: absolute; 
            inset: 0; 
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            transition: transform 0.3s var(--fade-ease); 
            will-change: transform;
          }
          .hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 62vh; text-align: center; padding: 24px 12px; }
          .hero-title { font-size: clamp(10px, 2vw, 80px); margin: 0; color: #fff; }
          .hero-cta { background: #0071e3; color: #fff; border-radius: 980px; padding: 8px 18px; border: 0; cursor: pointer; }
          .hero-cta:hover { opacity: 0.9; }
          .hero-phone { position: absolute; inset: 0; display: none; align-items: center; justify-content: center; z-index: 2; }
          .hero-phone img { width: 100%; height: auto; object-fit: contain; }
          @media (max-width: 768px) {
            .hero-video { display: none; }
            .hero-phone { display: flex; }
            .hero-phone img { transform: rotate(90deg); transform-origin: center; }
          }
        `}
      </style>

      <div className="hero-wrap" ref={wrapRef}>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          {/* Responsive video sources from latest */}
          <source
            src="/videos/hero-section/Hero-Sec-Small.webm"
            media="(max-width: 768px)"
          />
          <source
            src="/videos/hero-section/Hero-Sec-Large.mp4"
            media="(min-width: 769px)"
          />
        </video>

        {/* Mobile PNG fallback */}
        <div className="hero-phone" aria-hidden="true">
          <img src="/images/hero-section/iphone-16-pro_overview.webp" alt="iPhone 16 Pro" />
        </div>

        {/* Headline and CTA */}
        <div className="hero-content">
          <h1 className="hero-title">iPhone 16 Pro</h1>
          <button className="hero-cta">Buy</button>
        </div>
      </div>
    </section>
  );
}