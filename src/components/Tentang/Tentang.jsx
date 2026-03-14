import { useEffect, useRef } from "react";

export default function Tentang() {
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

    const profileCards = [
        {
            id: 1,
            title: "Titik Awal",
            desc: "Semuanya berawal dari rasa penasaran tentang bagaimana sebuah aplikasi bekerja di balik layar. Ketertarikan inilah yang akhirnya membawa saya masuk ke jurusan IT untuk belajar lebih dalam.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Fokus & Presisi",
            desc: "Seiring berjalannya waktu, saya sadar kode yang bagus saja tidak cukup. Saya mulai mendalami UI/UX dan analisis sistem agar produk tidak cuma fungsional, tapi juga enak dipakai.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.813-3.814a1.151 1.151 0 00-1.627-1.628l-3.814 3.813a15.999 15.999 0 00-4.648 4.764m3.42 3.42l-2.422 2.422a1.5 1.5 0 01-2.12 0c-.586-.586-.586-1.534 0-2.12l2.422-2.422m0 0a15.994 15.994 0 013.395-1.622m-1.622 3.395a15.99 15.99 0 001.622-3.395" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Logika & Empati",
            desc: "Bagi saya, mengembangkan sistem itu soal menyeimbangkan logika teknis dengan kebutuhan user. Tujuannya sederhana: membuat produk digital yang benar-benar bisa menyelesaikan masalah.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={ref}
            id="tentang"
            className="scroll-m-6 opacity-0"
        >
            <div className="text-light mx-auto px-5 md:px-7 max-w-7xl py-12 lg:py-18">
                <h3 className="tagline-section line-bottom-tagline" style={{ '--line-offset': '-20px' }}>
                    kisah singkat & <br className="hidden md:block" />
                    <span className="text-special">awal mula perjalananku</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mt-12">
                    
                    <div className="md:col-span-7">
                        <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 border-l-2 border-cyan-500 pl-3 text-white">
                            Profil Singkat
                        </h4>
                        
                        <div className="flex flex-col gap-4">
                            {/* eslint-disable-next-line */}
                            {profileCards.map((card, index) => (
                                <div 
                                    key={card.id} 
                                    className="group relative p-5 lg:p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(34,211,238,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 lg:group-hover:from-cyan-500/5 lg:group-hover:to-blue-500/5 transition-all duration-500"></div>
                                    
                                    <div className="relative flex items-start gap-4 lg:gap-5">
                                        <div className="mt-1 p-3 rounded-xl transition-all duration-300
                                            bg-cyan-400/10 text-cyan-400
                                            lg:bg-gray-800/80 lg:text-gray-400 
                                            lg:group-hover:text-cyan-400 lg:group-hover:bg-cyan-400/10 lg:group-hover:scale-110"
                                        >
                                            {card.icon}
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h5 className="font-medium lg:font-bold text-base lg:text-lg mb-1.5 transition-colors text-white lg:group-hover:text-cyan-400"
                                            >
                                                {card.title}
                                            </h5>
                                            <p className="text-sm text-secondary leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 md:mt-10">
                        <div className="bg-gray-900/40 p-6 lg:p-8 rounded-2xl border border-gray-800 sticky top-24">
                            <h4 className="font-bold text-base md:text-lg text-white">Ayo terhubung</h4>
                            <p className="text-secondary mt-4 leading-relaxed text-sm">
                                Saya aktif di beberapa sosial media. Kalau kamu mau ngobrol, diskusi, atau sekadar lihat aktivitas harian, langsung follow aja.
                            </p>
                            
                            <ul className="flex gap-4 list-none mt-6 items-center">
                                <li className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 hover:-translate-y-1">
                                    <a href="https://www.github.com/augustagung05" target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 lg:w-7 lg:h-7 fill-current">
                                            <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:bg-pink-500/10 text-gray-400 hover:text-pink-400 hover:-translate-y-1">
                                    <a href="https://www.instagram.com/anandast.05/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 lg:w-7 lg:h-7 fill-current">
                                            <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:bg-green-500/10 text-gray-400 hover:text-green-400 hover:-translate-y-1">
                                    <a href="https://wa.me/6285778208790" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 lg:w-7 lg:h-7 fill-current">
                                            <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}