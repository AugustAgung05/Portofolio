/* eslint-disable react/no-unknown-property */
import Navbar from "../components/Navbar/Navbar";
import Beranda from "../components/Beranda/Beranda";
import Slider from '../components/Slider/Slider';
import Tentang from '../components/Tentang/Tentang';
import Layanan from "../components/Layanan/Layanan";
import Collaboration from '../components/Collaboration/Collaboration';
import Keahlian from "../components/Keahlian/Keahlian";
import Testimoni from "../components/Testimoni/Testimoni";
import Portofolio from '../components/Portofolio/Portofolio'; 
import Footer from "../components/Footer/Footer";

export default function Layout() {
    return (
        <main>
            <div className="relative z-[-1] flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" className="absolute -top-10 sm:-top-18 lg:-top-32 xl:-top-40 2xl:-top-48 3xl:-top-56 left-0">
                    <defs>
                        <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                            <stop offset="0%" stopColor="#272C24" stopOpacity="0.1"></stop>
                            <stop offset="50%" stopColor="#272C24" stopOpacity="0.1"></stop>
                            <stop offset="100%" stopColor="#272C24" stopOpacity="0.2"></stop>
                            {/* <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1"></stop>
                            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.01"></stop>
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"></stop> */}
                        </radialGradient>
                    </defs>
                    <g fill="url(#cccircular-grad)">
                        <circle r="427" cx="400" cy="0" className="animate-fade-down opacity-0">
                            <animate 
                                attributeName="r"
                                values="427; 445; 427"
                                dur="4s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            />
                            </circle>

                        <circle r="366" cx="400" cy="0" className="animate-fade-down opacity-0">
                            <animate 
                                attributeName="r"
                                values="366; 382; 366"
                                dur="4s"
                                begin="0.2s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            />
                        </circle>

                        <circle r="305" cx="400" cy="0" className="animate-fade-down opacity-0">
                            <animate 
                                attributeName="r"
                                values="305; 320; 305"
                                dur="4s"
                                begin="0.4s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            />
                        </circle>

                        <circle r="244" cx="400" cy="0" className="animate-fade-down opacity-0">
                            <animate 
                                attributeName="r"
                                values="244; 258; 244"
                                dur="4s"
                                begin="0.6s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            />
                        </circle>

                        <circle r="183" cx="400" cy="0" className="animate-fade-down opacity-0">
                            <animate 
                                attributeName="r"
                                values="183; 195; 183"
                                dur="4s"
                                begin="0.8s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            />
                        </circle>

                        <circle r="122" cx="400" cy="0" className="animate-fade-down opacity-0">
                            <animate 
                                attributeName="r"
                                values="122; 135; 122"
                                dur="4s"
                                begin="1s"
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
                            />
                        </circle>
                    </g>
                </svg>
            </div>
            <Navbar />
            <Beranda />
            <Slider />
            <Tentang />
            <Layanan />
            <Collaboration/>
            <Keahlian />
            <Testimoni />
            <Portofolio />
            <Footer />
            {/* <div className="bg-bg">
                <h1 className="text-gray text-center p-4 text-sm xl:text-base">Website ini masih dalam tahap pengembangan. Mohon maaf atas ketidaknyamanan.</h1>    
            </div> */}
        </main>
    );
}