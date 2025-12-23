import { useEffect, useState } from "react";

//eslint-disable-next-line
export default function DetailCard({ images = [], title, role, desc, scopes = [], tools = [], features = [], link = "",onClose }) {
  const [index, setIndex] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
    e.currentTarget.style.transform = "scale(1.8)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transformOrigin = "center";
    e.currentTarget.style.transform = "scale(1)";
  }

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-900 text-white w-[95vw] max-w-3xl max-h-[95vh] overflow-y-auto modal-scroll rounded-xl p-6 shadow-2xl relative">
      <button
        onClick={onClose}
        className="sticky top-0 float-right bg-red-500 p-2 rounded-full hover:bg-red-700 transition z-[9999]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 fill-white">
          <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
        </svg>
      </button>

      <div className="w-full h-70 rounded-lg overflow-hidden mb-6 relative">
        <img
          src={images[index]}
          className="w-auto h-full mx-auto object-contain transition-transform duration-500 ease-in-out hover:scale-110"
          alt="Project Slideshow"
          onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              index === i ? "bg-white w-4" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
        
      <h2 className="text-base lg:text-2xl font-bold">{title}</h2>
      <p className="text-secondary text-sm mb-2">{role}</p>
      <p className="text-sm leading-relaxed mb-6">{desc}</p>

      <div className="mb-6">
        <h3 className="text-sm lg:text-lg font-semibold mb-2">Scope</h3>
        <div className="flex flex-wrap gap-2">
          {scopes.map((scope, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700"
            >
              {scope}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm lg:text-lg font-semibold mb-2">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm lg:text-lg font-semibold mb-2">Fitur</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </div>

      { link && (
        <button className="sticky bottom-0 float-right bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <a href={link} className="flex gap-2 items-center" target="_blank" rel="noopener noreferrer">
              <p className="text-gray-900/80 text-sm lg:text-base font-medium">Lihat Desain</p>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 lg:w-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#101828"></path> <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#101828"></path> </g></svg>
            </a>
        </button>
      )}
    </div>
  );
}
