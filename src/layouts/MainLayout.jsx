import circle1 from '../assets/up.svg';
import circle2 from '../assets/mid.svg';
import circle3 from '../assets/bottom.svg';
import NavbarComponent from "../components/NavbarComponent";
import BerandaSection from "../sections/BerandaSection";
import LayananSection from '../sections/LayananSection';
import PortofolioSection from '../sections/PortofolioSection'; 
import SlideComponent from '../components/SlideComponent';
import AboutComponent from '../components/AboutComponent';
import CollaborationComponent from '../components/CollaborationComponent';

function MainLayout() {
    return (
        <div>
            <div className="relative z-[-1] items-center flex flex-col mx-auto">
                <img src={circle1} className="absolute top-[50%] transform translate-y-[-60%] max-w-[100%] z-[1] md:translate-y-[-77%] md:w-[80%] lg:translate-y-[-80%] xl:w-[100%] xl:translate-y-[-83%] 3xl:max-w-[200%]" alt="circle-up"/>
                <img src={circle2} className="absolute top-[50%] transform translate-y-[-48%] max-w-[130%] z-[2] opacity-80 md:translate-y-[-63%] md:w-[95%] lg:translate-y-[-68%] xl:w-[110%] xl:translate-y-[-73%] 3xl:max-w-[200%]" alt="circle-mid"/>
                <img src={circle3} className="absolute top-[50%] transform translate-y-[-38%] max-w-[160%] z-[3] opacity-80 md:translate-y-[-55%] md:w-[115%] lg:translate-y-[-60%] xl:w-[120%] xl:translate-y-[-63%] 3xl:max-w-[200%]" alt="circle-bottom"/>
            </div>
            <NavbarComponent />
            <BerandaSection />
            <SlideComponent />
            <AboutComponent />
            <LayananSection />
            <CollaborationComponent/>
            <PortofolioSection />
            <div className="relative bg-bg">
                <h1 className="text-gray text-center p-4 text-sm lg:text-base 2xl:text-lg">Website ini masih dalam tahap pengembangan. Mohon maaf atas ketidaknyamanan.</h1>    
            </div>
        </div>
    );
}

export default MainLayout;