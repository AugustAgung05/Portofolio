import google from '../../assets/googleFooter.svg';
import instagram from '../../assets/instagramFooter.svg';
import whatsapp from '../../assets/whatsappFooter.svg';
import linkedin from '../../assets/linkedinFooter.svg';
import location from '../../assets/location.svg';
import telephone from '../../assets/telephone.svg';
import verified from '../../assets/verified.svg';
import arrow from '../../assets/arrow.svg';

import { useState } from 'react';

export default function Footer() {
    const [pesan, setPesan] = useState("");

  const handleWhatsApp = () => {
    if (!pesan.trim()) {
      alert("Silakan masukkan pesan terlebih dahulu.");
      return;
    }

    const phoneNumber = "6285778208790";
    const message = [
    "Halo Ananda Agung Styadi,",
    "",
    "Saya tertarik untuk berdiskusi lebih lanjut mengenai garapan project.",
    `Pesan saya: ${pesan}`,
    "",
    "Terima kasih!"
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

    return(
        <footer id="footer" className="bg-[#0F1722] mt-18">
            <div className="relative footer-shadow text-secondary px-5 md:px-7 pt-8 pb-4 max-w-7xl mx-auto">
                <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between items-start">
                    <div className="custom-width-1">
                        <h2 className="text-light font-bold text-lg lg:text-base"><span className="text-neon">X</span>AAS</h2>
                        <p className="mt-2 lg:mt-3 text-sm lg:text-xs xl:text-sm leading-relaxed">Teknologi terus berkembang, dan kamu bisa ikut maju! Dapatkan panduan lengkap untuk memahami dunia pemrograman dengan cara yang lebih mudah.</p>
                        <div className="mt-6 justify-center lg:justify-start flex gap-5 lg:gap-7">
                            <a href="https://wa.me/6285778208790"><img className="transition-transform duration-150 hover:scale-110" src={whatsapp} alt="whatsapp"/></a>
                            <a href="https://www.instagram.com/anandast.05/"><img className="transition-transform duration-150 hover:scale-110" src={instagram} alt="instagram"/></a>
                            <a href="mailto:anandaagungstyadi@gmail.com?subject=Tertarik%20untuk%20Berkolaborasi%20atau%20Mengetahui%20Lebih%20Lanjut&body=Halo%20Ananda%20Agung%20Styadi,%0D%0A%0D%0ASaya%20mengunjungi%20portofolio%20Anda%20dan%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20karya%20maupun%20peluang%20kolaborasi%20yang%20mungkin%20bisa%20dilakukan%20bersama.%0D%0A%0D%0AMohon%20informasikan%20waktu%20yang%20tepat%20untuk%20berdiskusi%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih."><img className="transition-transform duration-150 hover:scale-110" src={google} alt="mail"/></a>
                            <a href="https://www.linkedin.com/in/anandaagungstyadi/"><img className="transition-transform duration-150 hover:scale-110" src={linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-light font-bold text-lg lg:text-base">Tautan Cepat</h2>
                        <ul className="mt-2 lg:mt-3 space-y-1.5 lg:space-y-2.5 text-sm lg:text-xs xl:text-sm">
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#tentang">Tentang</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#layanan">Layanan</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#keahlian">Keahlian</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#testimoni">Pendapat Pelanggan</a></li>
                            <li className="flex items-center gap-3 group"><img className="transition-transform duration-200 group-hover:translate-x-1" src={arrow} alt="" /> <a href="#portofolio">Portofolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-light font-bold text-lg lg:text-base">Kontak</h2>
                        <ul className="mt-2 lg:mt-3 space-y-1.5 lg:space-y-3 text-sm lg:text-xs xl:text-sm">
                            <li className="flex items-center gap-2">
                                <img src={google} className="w-3" alt="mail"/>
                                <span>
                                    anandaagungstyadi@gmail.com
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={telephone} className="w-3" alt="telephone"/>
                                <span>
                                    (+62) 857-7820-8790
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={location} className="w-3" alt="location"/>
                                <span>
                                    Tangerang, Indonesia
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="custom-width-2">
                        <h2 className="text-light font-bold text-lg lg:text-base">Yuk Bangun Sesuatu Bersama</h2>
                        <p className="mt-2 lg:mt-3 text-sm lg:text-xs xl:text-sm leading-relaxed">Tertarik bekerja sama dalam proyek digital? Saya siap membantu Anda mewujudkan ide menjadi solusi nyata.</p>
                        <div className="mt-4 flex flex-col gap-3">
                            <textarea
                            onInput={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height = e.target.scrollHeight + "px";
                            }}
                            className="p-3 border rounded-lg border-secondary resize-none placeholder:text-secondary/80 placeholder:text-[13px] lg:placeholder:text-xs xl:placeholder:text-sm text-sm lg:text-xs xl:text-sm focus:outline-none focus:ring-0 focus:ring-offset-0" type="text" placeholder="Pesan kamu di sini..." 
                            value={pesan} 
                            onChange={(e) => setPesan(e.target.value)} 
                            />
                            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 flex justify-center rounded-lg gap-2 p-2.5 items-center bg-neon" type="button" onClick={handleWhatsApp} >
                                <p className="text-bg font-medium text-sm lg:text-xs xl:text-sm">Hubungi Saya</p>
                                <img src={verified} alt="verified" className="w-4"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="upper-line relative opacity-50 mt-10"></div>
                <p className="text-center text-secondary text-xs font-light tracking-wide">
                    <strong className="font-medium">© 2025 XAAS Portofolio Website.</strong> Hak Cipta Dilindungi.
                </p>
            </div>
        </footer>
    );
}