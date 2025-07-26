import "../styles/style.css"
import flower from "../assets/flower.svg";

//eslint-disable-next-line
function SlideComponent() {
  return (
    <div className="relative my-18 xl:my-0 xl:mt-24 xl:mb-16">
        <div className="absolute -left-8 h-[80px] 2xl:h-[120px] bg-neon rotate-4 md:rotate-3 xl:rotate-[1.5deg] 2xl:rotate-2 z-[-1] w-[110%]"></div>
        <div className="h-[80px] 2xl:h-[120px] bg-gdark">
            <div className="flex h-full items-center group gap-16 2xl:gap-24 overflow-x-hidden">
                <ul className="text-xl 2xl:text-2xl tracking-wide font-semibold list-none flex items-center gap-16 2xl:gap-24 text-white shrink-0 justify-between whitespace-nowrap min-w-full animate-marquee-monitor-1 2xl:animate-marquee-monitor-2 group-hover:paused">
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
                <ul className="text-xl 2xl:text-2xl tracking-wide font-semibold list-none flex items-center gap-16 2xl:gap-24 text-light shrink-0 justify-between whitespace-nowrap min-w-full animate-marquee-monitor-1 2xl:animate-marquee-monitor-2 group-hover:paused">
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