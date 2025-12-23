import { useState,useRef, useEffect } from 'react';
import linkedin from '../../assets/linkedin.svg';
// import sun from '../../assets/sun.svg';

import "../../styles/navbar.css";

//eslint-disable-next-line
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const toogleRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);


    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target) && toogleRef.current && !toogleRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        function handleResize(){
            if(window.innerWidth >= 1024){
                setIsOpen(false);
            }
        }
        if (isOpen) {
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("resize", handleResize);
        } else {
        document.removeEventListener("click", handleClickOutside);
        window.removeEventListener("resize", handleResize);
        };

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-bg/50 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="flex items-center w-full max-w-7xl mx-auto px-5 md:px-7 py-5 lg:py-2">
                <a href="https://github.com/AugustAgung05.github.io/Portofolio/" className="font-bold text-light tracking-wider xl:text-lg 3xl:text-xl"><span className="text-special">X</span>AAS</a>

                <div className='flex items-center'>
                    {/* <div className="absolute right-10 lg:hidden">
                        <a href=""><img src={sun} alt="" className="transition-transform duration-150 hover:scale-110"/></a>
                    </div> */}
                    <button ref={toogleRef} className={`block absolute right-5 md:right-7 lg:hidden ${isOpen ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
                        <span className="hamburger-menu duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-menu duration-300 ease-in-out my-1.5"></span>
                        <span className="hamburger-menu duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                </div>
                <nav ref={navRef} className={`absolute z-[999] lg:flex lg:static lg:ml-12 lg:bg-transparent lg:max-w-max lg:justify-center lg:shadow-none lg:rounded-none ${!isOpen ? 'hidden' : 'navbar-fixed'}`}>
                    <ul className="block lg:flex">
                        <li className="listitem-nav">
                            <a href="#tentang" className="anchor-nav">Tentang</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#layanan" className="anchor-nav">Layanan</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#keahlian" className="anchor-nav">Keahlian</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#testimoni" className="anchor-nav">Pendapat Pelanggan</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#portofolio" className="anchor-nav">Portofolio</a>
                        </li>
                        {/* <li className="listitem-nav">
                            <a href="#testimoni" className="anchor-nav">Blog</a>
                        </li> */}
                    </ul>
                    <div className="flex lg:hidden items-center justify-center py-4">
                        <a href="https://www.linkedin.com/in/anandaagungstyadi/"><img src={linkedin} alt="" className="transition-transform duration-150 hover:scale-110"/></a>
                    </div>
                </nav>  

                <div className="hidden lg:flex ml-auto gap-8 items-center p-2 max-w-max">
                    {/* <a href=""><img src={sun} alt="" className="w-5 2xl:w-6 transition-transform duration-150 hover:scale-110"/></a> */}
                    <a href="https://www.linkedin.com/in/anandaagungstyadi/"><img src={linkedin} alt="" className="w-5 3xl:w-6 transition-transform duration-150 hover:scale-110"/></a>
                </div>
            </div>
        </header>
    )
}