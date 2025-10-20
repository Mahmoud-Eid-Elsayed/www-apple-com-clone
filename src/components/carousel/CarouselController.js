import { useEffect, useState, useRef, useCallback } from "react";

export function useCarouselController({ sectionRef, innerRef, defaultDuration }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideCompleted, setSlideCompleted] = useState(false);
  const slideTimer = useRef(null);

  const items = [
    { type: "video", src: "/videos/Carousel/slide01.mp4", alt: "Slide 1", caption: "So fast. So fluid." },
    { type: "video", src: "/videos/Carousel/slide02.mp4", alt: "Slide 2", caption: "Pro studio in your pocket." },
    { type: "image", src: "/images/Carousel/slide-03.webp", alt: "Slide 3", caption: "Thinner borders — brilliant." },
    { type: "video", src: "/videos/Carousel/slide04.mp4", alt: "Slide 4", caption: "All-new A18 Pro chip." },
    { type: "image", src: "/images/Carousel/slide-05.webp", alt: "Slide 5", caption: "A huge leap in battery life." },
  ];

  const goToSlide = useCallback(
    (index) => {
      const total = items.length;
      const newIndex = (index + total) % total;
      setCurrent(newIndex);
      innerRef.current.style.transform = `translateX(calc(-${newIndex} * (var(--slide-width) + var(--slide-gap)) + (100% - var(--slide-width)) / 2))`;
    },
    [innerRef, items.length]
  );

  const nextSlide = useCallback(
    (manualIndex) => {
      if (typeof manualIndex === "number") goToSlide(manualIndex);
      else goToSlide(current + 1);
    },
    [current, goToSlide]
  );

  const prevSlide = useCallback(() => {
    goToSlide(current - 1);
  }, [current, goToSlide]);

  const clearTimer = () => {
    if (slideTimer.current) clearTimeout(slideTimer.current);
  };

  const playSlides = useCallback(() => {
    clearTimer();
    setIsPlaying(true);
    setSlideCompleted(false);
    const duration = defaultDuration * 1000;

    slideTimer.current = setTimeout(() => {
      if (current < items.length - 1) {
        nextSlide();
      } else {
        clearTimer();
        setIsPlaying(false);
        setSlideCompleted(true);
      }
    }, duration);
  }, [current, items.length, nextSlide, defaultDuration]);

  const togglePlay = () => {
    if (slideCompleted) {
      setCurrent(0);
      playSlides();
      return;
    }
    if (isPlaying) {
      clearTimer();
      setIsPlaying(false);
    } else {
      playSlides();
    }
  };

  // Auto play when section is in view
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playSlides();
          } else {
            clearTimer();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, playSlides]);

  // Sticky scroll behavior
  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > window.innerHeight / 2) {
        section.style.position = "sticky";
        section.style.top = "0";
      } else {
        section.style.position = "relative";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return {
    current,
    isPlaying,
    slideCompleted,
    togglePlay,
    nextSlide,
    prevSlide,
    items,
  };
}
