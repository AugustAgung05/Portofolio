/* eslint-disable react/no-unknown-property */
import NavbarComponent from "../components/NavbarComponent";
import BerandaSection from "../sections/BerandaSection";
import PortofolioSection from '../sections/PortofolioSection'; 
import SlideComponent from '../components/SlideComponent';
import AboutComponent from '../components/AboutComponent';
import CollaborationComponent from '../components/CollaborationComponent';
import FooterComponent from "../components/FooterComponent";
import LayananComponent from "../components/LayananComponent";
import KeahlianComponent from "../components/KeahlianComponent";
import TestimoniComponent from "../components/TestimoniComponent";

function MainLayout() {
    return (
        <>
            <div className="relative z-[-1] flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" className="absolute -top-10 sm:-top-18 lg:-top-32 xl:-top-40 2xl:-top-48 3xl:-top-56 left-0">
                    <defs>
                        <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#ECDFCC" stopOpacity="0.02"></stop>
                        <stop offset="50%" stopColor="#ECDFCC" stopOpacity="0.04"></stop>
                        <stop offset="100%" stopColor="#ECDFCC" stopOpacity="0.02"></stop>
                        </radialGradient>
                    </defs>
                    <g fill="url(#cccircular-grad)">
                        <circle r="427" cx="400" cy="0"></circle>
                        <circle r="366" cx="400" cy="0"></circle>
                        <circle r="305" cx="400" cy="0"></circle>
                        <circle r="244" cx="400" cy="0"></circle>
                        <circle r="183" cx="400" cy="0"></circle>
                        <circle r="122" cx="400" cy="0"></circle>
                    </g>
                </svg>
            </div>

            <NavbarComponent />
            <BerandaSection />
            <SlideComponent />
            <AboutComponent />
            <LayananComponent />
            <CollaborationComponent/>
            <KeahlianComponent />
            <TestimoniComponent />
            <PortofolioSection />
            <FooterComponent />
            <div className="bg-bg">
                <h1 className="text-gray text-center p-4 text-sm lg:text-base 2xl:text-lg">Website ini masih dalam tahap pengembangan. Mohon maaf atas ketidaknyamanan.</h1>    
            </div>
        </>
    );
}

export default MainLayout;