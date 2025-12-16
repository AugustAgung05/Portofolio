import flower from "../../assets/flower.svg";
import { useEffect, useRef } from "react";

//eslint-disable-next-line
export default function Slider() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in");
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
  }, []);

  return (
    <section ref={ref} className="relative my-18 lg:my-0 lg:mt-48 xl:mt-64 opacity-0">
      <svg
        viewBox="0 0 1440 158"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-5 md:-top-6 2xl:-top-[30px] left-0 w-full -z-10 h-[120px] md:h-[130px] 2xl:h-[160px] mx-auto">
          <defs>
    <linearGradient id="cyanToBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#22d3ee" />
      <stop offset="100%" stopColor="#2563eb" />
    </linearGradient>
  </defs>
      <polygon points="0,0 1440,50 1440,158 0,108" fill="url(#cyanToBlue)"/>
      </svg>
      <div className="h-[80px] 2xl:h-[100px] bg-[#0F1722]">
        <div className="flex h-full items-center group gap-16 2xl:gap-24 overflow-x-hidden">
          <ul className="text-lg 2xl:text-xl tracking-wide font-semibold list-none flex items-center gap-16 2xl:gap-24 text-white shrink-0 justify-between whitespace-nowrap min-w-full animate-marquee-monitor-1 2xl:animate-marquee-monitor-2 group-hover:paused">
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Figma Design</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>UML Modeling</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Web Design</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Task Prioritization</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Self-Learning and Initiative</h2>
            </li>
          </ul>
          <ul className="text-lg 2xl:text-xl tracking-wide font-semibold list-none flex items-center gap-16 2xl:gap-24 text-light shrink-0 justify-between whitespace-nowrap min-w-full animate-marquee-monitor-1 2xl:animate-marquee-monitor-2 group-hover:paused">
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Figma Design</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>UML Modeling</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Web Design</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Task Prioritization</h2>
            </li>
            <li>
              <img src={flower} alt="flower" className="scale-60 2xl:scale-90"/>
            </li>
            <li>
              <h2>Self-Learning and Initiative</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}