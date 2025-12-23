import { useEffect, useRef } from "react";

export default function Layanan() {
    const ref = useRef(null);
    
        useEffect(() => {
            const el = ref.current;
    
            const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                el.classList.add("animate-fade-in");
                observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
            );
    
            observer.observe(el);
        }, []);
    return (
        <section ref={ref} id="layanan" className="scroll-m-6 opacity-0">
            <div className="text-white px-5 md:px-7 max-w-7xl py-12 lg:py-18 mx-auto">
                <h3 className="tagline-section custom-line-bottom-tagline" style={{ '--line-offset': '-120px' }}>
                    4 aksi nyata dalam <br className="hidden md:block" />
                    <span className="text-special">pengembangan digital</span>
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-12">
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors group">
                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                Pengembangan Website
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                Membuat tampilan aplikasi yang menarik dan
                                konsisten dengan kode yang bersih.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors group">
                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                Pengalaman Pengguna
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                Mendesain alur sistem dengan diagram teknis yang
                                mudah dipahami user.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors group">
                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                Desain UI/UX
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                Merancang alur penggunaan yang efisien dan
                                estetis.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors group">
                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                Pemodelan Sistem
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                Membuat representasi visual dari sistem yang
                                kompleks menjadi sederhana.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5 pl-0 lg:pl-8">
                        <h4 className="text-secondary uppercase tracking-widest text-sm font-semibold mb-8 border-l-2 border-cyan-500 pl-3">
                            Pendekatan Kerja
                        </h4>

                        <div className="space-y-0 relative">
                            <div className="absolute left-[7px] top-2 bottom-6 w-[2px] bg-gray-800"></div>

                            <div className="relative flex gap-6 pb-10 group">
                                <div className="relative z-10 flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                                        Analisis Mendalam
                                    </h5>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Membedah akar masalah & kebutuhan bisnis
                                        untuk merumuskan strategi tepat sasaran.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-6 pb-10 group">
                                <div className="relative z-10 flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                                        Perancangan Terstruktur
                                    </h5>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Membangun kerangka logika, alur sistem,
                                        & tata letak visual yang kokoh.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-6 pb-10 group">
                                <div className="relative z-10 flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                                        Implementasi Presisi
                                    </h5>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Menerjemahkan rancangan menjadi produk
                                        digital yang detail, estetis, &
                                        fungsional.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-6 group">
                                <div className="relative z-10 flex-shrink-0 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors">
                                        Validasi & Optimasi
                                    </h5>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Pengujian menyeluruh untuk memastikan
                                        hasil akhir berjalan efisien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
