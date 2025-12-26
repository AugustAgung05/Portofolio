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
    <section ref={ref} id="collaboration" className="opacity-0">
      <div className="text-light px-5 md:px-7 py-32 lg:py-18 relative flex flex-col gap-8 md:flex-row justify-center md:justify-between items-center max-w-7xl mx-auto">
          <div className="absolute inset-0 blur-bg -z-10"></div>
          <h2  className="text-center md:text-left font-bold text-2xl sm:text-3xl leading-relaxed sm:w-[60%]">Saya terbuka untuk kerja sama dan kolaborasi profesional.</h2>
          <div className="flex flex-col gap-3 items-center font-semibold text-sm text-light">
              <a href="#footer" className="group rounded-lg p-[2px] bg-gradient-to-r from-cyan-400 to-blue-600">
                <div className="bg-[#0f0f0f] rounded-[6px] px-12 py-3 transition-all duration-300 group-hover:bg-transparent">
                  <span className="text-light font-semibold">Hubungi Saya</span>
                </div>
              </a>
              <a href="#portofolio" className="bg-gradient-to-r from-cyan-400 to-blue-600 px-12 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.5)] hover:scale-105 text-bg">Lihat Portofolio</a>
          </div>
      </div>
    </section>
  );
}