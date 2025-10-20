import { useState, useEffect, useRef } from "react";
import "./Sections.css";

function Sections_A01() {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setShowImage(true);
    console.log("Video ended, showing image");
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !showImage) {
          console.log("Video in view, attempting to play");
          videoElement.play().catch((error) => {
            console.error("Video playback failed:", error);
          });
        } else {
          console.log("Video out of view or image shown, pausing");
          videoElement.pause();
        }
      },
      {
        root: null,
        threshold: 0.2, // Play when 20% of .media-container is visible
      }
    );

    const mediaContainer = videoElement.parentElement;
    if (mediaContainer) {
      observer.observe(mediaContainer);
    }

    // Fallback: Attempt to play on mount if in view
    const tryPlay = async () => {
      const rect = mediaContainer.getBoundingClientRect();
      const isInViewport =
        rect.top >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
      if (isInViewport && !showImage) {
        console.log("Video in viewport on mount, attempting to play");
        try {
          await videoElement.play();
        } catch (error) {
          console.error("Initial playback failed:", error);
        }
      }
    };

    tryPlay();

    return () => {
      if (mediaContainer) {
        observer.unobserve(mediaContainer);
      }
    };
  }, [showImage]);

  return (
    <section className="sections">
      <div className="sections-wrapper">
        <div className="glow-text" aria-hidden="true">
          <span>Strength. Beauty.</span>
          <br />
          <span className="glow-protruding">Titanium.</span>
        </div>
        <div className="media-container">
          <video
            ref={videoRef}
            className="hero-video"
            muted
            playsInline
            onEnded={handleVideoEnd}
            src="/videos/ChipSection/ChipSection_A01.mp4"
          />
          <img
            className={`hero-image ${showImage ? "visible" : ""}`}
            src="/images/ChipSection/ChipSection-EndFrame.webp"
            alt="iPhone 16 Pro Titanium End Frame"
          />
        </div>
      </div>
    </section>
  );
}

export default Sections_A01;
