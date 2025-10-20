export const initCarousel = (carouselEl, { autoplay = true, interval = 3000 }) => {
  let observer;
  let autoScroll;


  const startAutoplay = () => {
    stopAutoplay();
    autoScroll = setInterval(() => {
      if (!carouselEl) return;
      carouselEl.scrollBy({ left: carouselEl.offsetWidth, behavior: "smooth" });
      // Loop back if at the end
      if (carouselEl.scrollLeft + carouselEl.offsetWidth >= carouselEl.scrollWidth) {
        carouselEl.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, interval);
  };


  const stopAutoplay = () => {
    if (autoScroll) clearInterval(autoScroll);
  };


  // Observe when carousel is visible in viewport
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && autoplay) startAutoplay();
        else stopAutoplay();
      });
    },
    { threshold: 0.6 }
  );


  observer.observe(carouselEl);


  return () => {
    stopAutoplay();
    if (observer) observer.disconnect();
  };
};