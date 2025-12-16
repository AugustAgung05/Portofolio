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
          { threshold: 0.5 }
          );
  
          observer.observe(el);
      }, []);
  return (
    <section ref={ref} id="collaboration" className="flex flex-col gap-8 sm:flex-row text-white mx-5 lg:mx-24 xl:mx-32 2xl:mx-40 my-12 sm:items-center sm:justify-between opacity-0">
        <h2  className="text-center sm:text-left font-bold text-2xl sm:text-3xl leading-relaxed sm:w-[60%]">Saya terbuka untuk kerja sama dan kolaborasi profesional.</h2>
        <div className="flex flex-col gap-3 items-center font-semibold text-sm text-white">
            <button className="group rounded-lg p-[2px] bg-gradient-to-r from-cyan-400 to-blue-600">
              <div className="bg-[#0f0f0f] rounded-[6px] px-12 py-3 transition-all duration-300 group-hover:bg-transparent">
                <span className="text-white font-bold">Hubungi Saya</span>
              </div>
            </button>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 px-12 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-105 text-bg">Lihat Portofolio</button>
        </div>
    </section>
  );
}