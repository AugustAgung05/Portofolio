import { useState,useRef, useEffect } from 'react';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import sun from '../../assets/sun.svg';

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
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="flex justify-between lg:gap-6 xl:gap-14 items-center relative mt-1 mx-5">
                <div className="flex gap-2 items-center">
                    <a href="https://github.com/AugustAgung05.github.io/Portofolio/" className="font-bold block py-5 xl:text-lg 2xl:text-xl text-light tracking-wider"><span className="text-special">X</span>AAS</a>
                </div>    
                <div className='flex items-center'>
                    <div className="absolute right-10 lg:hidden">
                        <a href=""><img src={sun} alt="" className="transition-transform duration-150 hover:scale-110"/></a>
                    </div>
                    <button ref={toogleRef} className={`block absolute right-0 lg:hidden ${isOpen ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
                        <span className="hamburger-menu duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-menu duration-300 ease-in-out my-1.5"></span>
                        <span className="hamburger-menu duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                </div>
                <nav ref={navRef} className={`absolute lg:border-none py-3 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-6 top-17 lg:flex lg:static lg:bg-transparent lg:max-w-max lg:justify-center lg:shadow-none lg:rounded-none ${!isOpen ? 'hidden' : 'navbar-fixed'}`}>
                    <ul className="block lg:flex">
                        <li className="listitem-nav">
                            <a href="#about" className="anchor-nav">Tentang</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#keahlian" className="anchor-nav">Layanan</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#portofolio" className="anchor-nav">Portofolio</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#testimoni" className="anchor-nav">Pendapat Pelanggan</a>
                        </li>
                        <li className="listitem-nav">
                            <a href="#testimoni" className="anchor-nav">Blog</a>
                        </li>
                    </ul>
                    <div className="flex lg:hidden items-center justify-between gap-5 pb-2 mt-4 mx-16">
                        <a href="mailto:anandaagungstyadi@gmail.com?subject=Tertarik%20untuk%20Berkolaborasi%20atau%20Mengetahui%20Lebih%20Lanjut&body=Halo%20Ananda%20Agung%20Styadi,%0D%0A%0D%0ASaya%20mengunjungi%20portofolio%20Anda%20dan%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20karya%20maupun%20peluang%20kolaborasi%20yang%20mungkin%20bisa%20dilakukan%20bersama.%0D%0A%0D%0AMohon%20informasikan%20waktu%20yang%20tepat%20untuk%20berdiskusi%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih."><img src={google} alt="" className="transition-transform duration-150 hover:scale-110"/></a>
                        <a href="https://github.com/AugustAgung05"><img src={github} alt="" className="transition-transform duration-150 hover:scale-110"/></a>
                        <a href="https://www.linkedin.com/in/anandaagungstyadi/"><img src={linkedin} alt="" className="transition-transform duration-150 hover:scale-110"/></a>
                    </div>
                </nav>  
                <div className="hidden lg:flex gap-8 items-center mr-6 lg:ml-auto">
                    <a href=""><img src={sun} alt="" className="w-5 2xl:w-6 transition-transform duration-150 hover:scale-110"/></a>
                    <a href="https://www.linkedin.com/in/anandaagungstyadi/"><img src={linkedin} alt="" className="w-5 2xl:w-6 transition-transform duration-150 hover:scale-110"/></a>
                </div>
            </div>
        </header>
    )
}