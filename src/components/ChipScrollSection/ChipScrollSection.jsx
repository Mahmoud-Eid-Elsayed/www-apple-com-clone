import { useEffect, useRef } from "react";
import "./ChipScrollSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChipScrollSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    // Lazy load + play only when in view
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        if (video.paused) {
          video.play();
        }
      },
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="chip-scroll-section" ref={sectionRef}>
      <video
        ref={videoRef}
        className="chip-video"
        src="/videos/chip/iPhone-16-Pro-chip.mp4"
        muted
        playsInline
        preload="none"
        poster="/videos/chip/chip_0001.jpg"
      />
    </section>
  );
}
