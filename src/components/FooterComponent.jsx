import google from '../assets/googleFooter.svg';
import instagram from '../assets/instagramFooter.svg';
import whatsapp from '../assets/whatsappFooter.svg';
import linkedin from '../assets/linkedinFooter.svg';
import mail from '../assets/mailFooter.svg';
import location from '../assets/location.svg';
import telephone from '../assets/telephone.svg';
import verified from '../assets/verified.svg';
import arrow from '../assets/arrow.svg';

import "../styles/style.css";

export default function FooterComponent() {
    return(
        <div className="bg-gdark text-secondary">
            <div className="mx-5 lg:mx-12 pt-8 pb-4">
                <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between items-start">
                    <div className="custom-width-1">
                        <h2 className="text-light font-bold text-lg lg:text-base"><span className="text-neon">X</span>AAS</h2>
                        <p className="mt-2 lg:mt-3 text-sm lg:text-xs xl:text-sm leading-relaxed">Teknologi terus berkembang, dan kamu bisa ikut maju! Dapatkan panduan lengkap untuk memahami dunia pemrograman dengan cara yang lebih mudah.</p>
                        <div className="mt-6 justify-center flex gap-5 lg:gap-7">
                            <a href="#"><img className="transition-transform duration-150 hover:scale-110" src={whatsapp} alt="whatsapp"/></a>
                            <a href="#"><img className="transition-transform duration-150 hover:scale-110" src={instagram} alt="instagram"/></a>
                            <a href="#"><img className="transition-transform duration-150 hover:scale-110" src={google} alt="mail"/></a>
                            <a href="#"><img className="transition-transform duration-150 hover:scale-110" src={linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-light font-bold text-lg lg:text-base">Tautan Cepat</h2>
                        <ul className="mt-2 lg:mt-3 space-y-1.5 lg:space-y-2.5 text-sm lg:text-xs xl:text-sm">
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#">Beranda</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#">Tentang</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#">Layanan</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#">Pendapat Pelanggan</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-light font-bold text-lg lg:text-base">Kontak</h2>
                        <ul className="mt-2 lg:mt-3 space-y-1.5 lg:space-y-3 text-sm lg:text-xs xl:text-sm">
                            <li>
                                <a href="" className="flex items-center gap-2">
                                    <img src={mail} alt="mail"/>
                                    <span>
                                        anandaagungstyadi@gmail.com
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center gap-2">
                                    <img src={telephone} alt="telephone"/>
                                    <span>
                                        (+62) 857-7820-8790
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center gap-2">
                                    <img src={location} alt="location"/>
                                    <span>
                                        Kab. Tangerang, Banten
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="custom-width-2">
                        <h2 className="text-light font-bold text-lg lg:text-base">Yuk Bangun Sesuatu Bersama</h2>
                        <p className="mt-2 lg:mt-3 text-sm lg:text-xs xl:text-sm leading-relaxed">Tertarik bekerja sama dalam proyek digital? Saya siap membantu Anda mewujudkan ide menjadi solusi nyata.</p>
                        <div className="mt-4 flex flex-col gap-3">
                            <input className="py-3 px-4 border rounded-lg border-secondary placeholder:text-secondary placeholder:text-sm lg:placeholder:text-xs xl:placeholder:text-sm text-sm lg:text-xs xl:text-sm focus:outline-none focus:ring-0 focus:ring-offset-0" type="text" name="email" id="email" placeholder="Email kamu di sini..." />
                            <button className="flex justify-center rounded-lg gap-2 p-3 items-center bg-neon" type="submit">
                                <p className="text-bg font-semibold text-sm lg:text-xs xl:text-sm">Hubungi Saya</p>
                                <img src={verified} alt="verified"/>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="mt-6 mb-4 border-neon"/>
                <p className="text-center text-secondary text-xs font-light tracking-wide">
                    <strong className="font-medium">© 2025 XAAS Portofolio Website.</strong> Hak Cipta Dilindungi.
                    </p>
            </div>
        </div>
    );
}