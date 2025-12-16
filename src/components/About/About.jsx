import { useEffect, useRef } from "react";

export default function About() {
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
        { threshold: 0.5 }
        );

        observer.observe(el);
    }, []);

    return (
        <section
            ref={ref}
            id="about"
            className="text-light mx-5 mt-18 lg:mt-24 lg:pt-36 lg:pb-24 scroll-m-48 relative opacity-0"
        >
            <div className="absolute inset-0 blur-bg-premium -z-10"></div>
            <h3 className="tagline-section line-bottom-tagline">
                kisah singkat & <br className="hidden md:block" />
                <span className="text-special">awal mula perjalananku</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center place-items-center mt-16 mx-18">
                <div className="grid-cols-1 md:grid-cols-2 lg:col-span-4">
                    <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
                        <h4 className="font-bold text-xl">Ayo terhubung</h4>
                        <p className="text-secondary mt-4 leading-relaxed text-sm">
                            Saya aktif di beberapa sosial media. Kalau kamu mau
                            ngobrol, diskusi, atau sekadar lihat aktivitas
                            harian, langsung follow aja.
                        </p>
                        <ul className="flex gap-3 list-none mt-4 items-center">
                            <li className="p-1.5 rounded-full bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 hover:bg-[length:100%_100%] text-neon fill-current hover:text-bg">
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-10">
                                        <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="p-1.5 rounded-full bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 hover:bg-[length:100%_100%] text-neon fill-current hover:text-bg">
                                <a href="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 640"
                                        className="w-10"
                                    >
                                        <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="p-1.5 rounded-full bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 hover:bg-[length:100%_100%] text-neon fill-current hover:text-bg">
                                <a href="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 640"
                                        className="w-10"
                                    >
                                        <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid-cols-1 md:grid-cols-2 lg:col-span-6">
                    <div className="flex flex-col gap-3 text-secondary leading-relaxed lg:text-sm">
                        <h4 className="uppercase tracking-widest text-sm font-semibold mb-4 border-l-2 border-cyan-500 pl-3">
                            Profil Singkat
                        </h4>
                        <p>
                            Saya memulai perjalanan di dunia teknologi karena rasa
                            ingin tahu tentang cara kerja sistem. Itu yang mendorong
                            saya menekuni Teknik Informatika.
                        </p>
                        <p>
                            Di tengah proses belajar, saya tertarik pada UI/UX dan
                            analisis sistem—bukan hanya soal sistem berjalan, tapi
                            juga terasa nyaman bagi pengguna.
                        </p>
                        <p>
                            Bagi saya, setiap proyek adalah kesempatan untuk
                            menggabungkan logika teknis dan empati, menciptakan
                            solusi digital yang bermanfaat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
