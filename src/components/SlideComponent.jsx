import flower from "../assets/flower.svg";
//eslint-disable-next-line
function SlideComponent() {
  return (
    <div className="relative my-18 lg:my-0 lg:mt-24 lg:mb-16">
      <svg
        viewBox="0 0 1440 158"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-5 md:-top-6 lg:-top-[30px] left-0 w-full -z-10 h-[120px] md:h-[130px] lg:h-[140px] 2xl:h-[180px] mx-auto">
      <polygon points="0,0 1440,50 1440,158 0,108" fill="#40E4F1"/>
      </svg>
      <div className="h-[80px] 2xl:h-[120px] bg-gdark">
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
    </div>
  );
}

export default SlideComponent;