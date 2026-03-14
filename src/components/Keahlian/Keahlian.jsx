import { useEffect, useRef, useState } from "react";
import htmlSkill from '../../assets/HTML Skill.svg';
import cssSkill from '../../assets/CSS SKill.svg';
import javascriptSkill from '../../assets/Javascript Skill.svg';
import reactSkill from '../../assets/React Skill.svg';
import figmaSkill from '../../assets/Figma Skill.svg';
import gitSkill from '../../assets/Git Skill.svg';
import tailwindSkill from '../../assets/Tailwind Skill.svg';
import mysqlSkill from '../../assets/MySQL Skill.svg';
import vueSkill from '../../assets/Vue Skill.svg';
import umlSkill from '../../assets/Diagram Skill.svg';

export default function Keahlian() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Kita tidak unobserve di sini jika ingin animasinya bisa berulang saat di-scroll naik-turun,
                    // tapi jika ingin animasinya jalan sekali saja, gunakan: observer.unobserve(el);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 } // Memicu lebih awal saat 10% elemen terlihat
        );

        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Memasukkan data ke dalam Array agar mudah di-map dan diatur animasinya
    const skills = [
        { title: "HTML", desc: "Front-End Development", img: htmlSkill, color: "group-hover:shadow-orange-500/20" },
        { title: "CSS", desc: "Front-End Development", img: cssSkill, color: "group-hover:shadow-blue-500/20" },
        { title: "JavaScript", desc: "Front-End Development", img: javascriptSkill, color: "group-hover:shadow-yellow-400/20" },
        { title: "React", desc: "Front-End Development", img: reactSkill, color: "group-hover:shadow-cyan-400/20" },
        { title: "Vue.js", desc: "Front-End Development", img: vueSkill, color: "group-hover:shadow-emerald-500/20" },
        { title: "Tailwind CSS", desc: "Front-End Development", img: tailwindSkill, color: "group-hover:shadow-teal-400/20" },
        { title: "MySQL", desc: "Back-End Development", img: mysqlSkill, color: "group-hover:shadow-blue-600/20" },
        { title: "Figma", desc: "UI/UX Design", img: figmaSkill, color: "group-hover:shadow-pink-500/20" },
        { title: "UML", desc: "System Design", img: umlSkill, color: "group-hover:shadow-red-500/20" },
        { title: "Git", desc: "Version Control", img: gitSkill, color: "group-hover:shadow-orange-600/20" },
    ];

    return (
        <section ref={ref} id="keahlian" className="relative py-20 lg:py-28 overflow-hidden">
            {/* Latar belakang dekoratif (Glow blur) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="px-5 md:px-7 max-w-7xl mx-auto text-light relative z-10">
                
                {/* Bagian Headline */}
                <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="tagline-section custom-line-bottom-tagline text-center md:text-left" style={{ '--line-offset': '-120px' }}>
                        senjata utama dalam <br className="hidden md:block"/>
                        <span className="text-special text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            pengembangan digital
                        </span>
                    </h3>
                </div>

                {/* Grid Kartu Keahlian */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 mt-16">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.title}
                            // Logika transisi: Delay bertambah 100ms untuk setiap kartu (Staggered Effect)
                            className={`transform transition-all duration-700 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Desain Kartu (Menggantikan file Card.jsx lama Anda) */}
                            <div className={`group relative h-full bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${skill.color} cursor-default overflow-hidden`}>
                                
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>

                                <div className="flex flex-col items-center text-center gap-4">
                                    {/* Wadah Ikon dengan animasi rotasi/scale saat di-hover */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-3 rounded-xl bg-gray-800 border border-gray-700/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                        <img 
                                            src={skill.img} 
                                            alt={`${skill.title} icon`} 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    
                                    {/* Teks */}
                                    <div>
                                        <h4 className="text-white font-bold text-sm md:text-base tracking-wide group-hover:text-cyan-400 transition-colors">
                                            {skill.title}
                                        </h4>
                                        <p className="text-gray-400 text-xs md:text-sm mt-1 font-medium">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};