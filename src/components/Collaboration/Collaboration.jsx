import { useEffect, useRef } from "react";

export default function Collaboration() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <section ref={ref} id="collaboration" className="opacity-0 relative overflow-visible">

      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[70vw] max-w-[500px] h-[40vw] max-h-[300px] bg-cyan-500/10 blur-[120px] rounded-full breathing-glow"></div>
        <div className="absolute w-[60vw] max-w-[420px] h-[35vw] max-h-[260px] bg-blue-500/10 blur-[140px] rounded-full breathing-glow glow-delay"></div>
      </div>

      <div className="text-light px-5 md:px-7 py-28 relative flex flex-col gap-10 md:flex-row justify-center md:justify-between items-center max-w-7xl mx-auto">

        <h2 className="text-center md:text-left font-bold text-2xl lg:text-3xl leading-relaxed sm:w-[60%]">
          Saya terbuka untuk kerja sama dan kolaborasi profesional.
        </h2>

        <div className="flex flex-col gap-4 items-center font-semibold text-xs lg:text-sm tracking-wide">

          <a
            href="#footer"
            className="group rounded-lg p-[2px] bg-gradient-to-r from-cyan-400 to-blue-600"
          >
            <div className="bg-[#0f0f0f] rounded-[6px] px-12 py-3 transition-all duration-300 group-hover:bg-transparent">
              <span className="text-light font-semibold">Hubungi Saya</span>
            </div>
          </a>

          <a href="#portofolio" className="portfolio-cta">
            Lihat Portofolio
          </a>

        </div>
      </div>
    </section>
  );
}