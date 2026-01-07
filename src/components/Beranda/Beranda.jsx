import arrow from '../../assets/arrow.svg';
import agung from '../../assets/agung.png';
import Card from './Card';

export default function About(){
    return (
        <>
            <section id="beranda" className="flex flex-col">
                <div className="relative w-full max-w-7xl mx-auto px-5 md:px-7 py-8 lg:py-18 xl:py-[90px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
                    <div className="w-full lg:w-1/3 flex flex-col items-start opacity-0 animate-fade-in fade-2 lg:fade-1 order-2 lg:order-1 pt-5 lg:pt-0">
                        <h3 className="text-light tracking-wider font-medium text-sm md:text-base lg:text-sm xl:text-base">
                            Hai, perkenalkan saya
                        </h3>
                        <h1 className="text-light font-bold mt-4 self-center tracking-wider text-[20px] md:text-[26px] lg:text-[20px] xl:text-[24px] 3xl:text-[32px] relative line-bottom-home font-rock-salt lowercase text-special whitespace-nowrap">
                            Ananda Agung Styadi
                        </h1>
                        <p className="mt-8 text-sm md:text-base lg:text-sm xl:text-[16px] font-light text-secondary leading-7 lg:leading-8">
                            <span className="block lg:hidden">
                                Mahasiswa aktif dari program studi Teknik Informatika semester 5 yang telah memiliki <strong className="font-semibold"> sertifikat kompetensi BNSP</strong>. Berpengalaman dalam mengembangkan berbagai proyek pembelajaran dan selalu bersemangat memperdalam keterampilan di bidang teknologi informasi, mulai dari pemrograman, pengembangan aplikasi, hingga riset terbaru di industri digital.
                            </span>
                            <span className="hidden lg:block">
                                Mahasiswa teknik informatika semester 5 yang memiliki <strong className="font-semibold"> sertifikat BNSP</strong>, aktif mengembangkan proyek dan keterampilan di bidang teknologi.
                            </span>
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center relative z-10 order-1 lg:order-2 opacity-0 animate-fade-in fade-1 lg:fade-3">
                        <div className="relative w-[240px] sm:w-[280px] xl:w-[320px]">
                            <img 
                                src={agung} 
                                className="w-full h-auto shadow-[16px_16px_#747474] sm:shadow-[18px_18px_#747474] rounded-md" 
                                alt="Ananda Agung Styadi" 
                            />
                            
                            <div className="absolute bottom-[46%] -right-[20px] sm:-right-[40px] lg:-right-[30px]">
                                <Card descriptionClass="ml-3" title="Proyek Terselesaikan" description="15+" className="fade-1" />
                            </div>

                            <div className="absolute bottom-[20%] -left-[20px] sm:-left-[40px] lg:-left-[30px] text-end">
                                <Card descriptionClass="mr-3" title="Tahun Pengalaman" description="2+" className="fade-2" />
                            </div>

                            <div className="absolute -bottom-[20px] -right-[20px] sm:-right-[30px]">
                                <Card descriptionClass="ml-3" title="Klien | Partner" description="8+" className="fade-3" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex flex-col items-start opacity-0 animate-fade-in fade-3 lg:fade-2 order-3 lg:self-start lg:pl-3 2xl:pl-6 lg:pt-8">
                        <h3 className="text-light tracking-wider font-medium text-sm md:text-base lg:text-sm xl:text-base">
                            Layanan
                        </h3>
                        <p className="mt-4 text-sm md:text-base lg:text-sm xl:text-[16px] font-light text-secondary leading-7 lg:leading-8">
                            <span className="hidden lg:block">
                            Punya ide keren untuk <strong className="font-semibold">website atau aplikasi</strong>? Akan kami bantu! Yuk, mulai sekarang dan jadikan ide kamu nyata!
                            </span>
                            <span className="block lg:hidden">
                                Punya ide menarik yang selama ini hanya tersimpan dalam pikiran, baik untuk website atau aplikasi impianmu? Jangan biarkan ide tersebut hanya menjadi wacana—tim kami siap mendampingi dari tahap <strong className="font-semibold">perencanaan, desain, hingga pengembangan</strong> agar ide kamu benar-benar menjadi kenyataan. Mulai sekarang, manfaatkan kesempatan ini untuk berkreasi, mengembangkan potensi, dan wujudkan gagasan digital yang berdampak untuk banyak orang!
                            </span>
                        </p>
                        <div className="flex mt-5">
                            <a href="#layanan" className="flex gap-3 group items-center">
                                <span className="text-special text-sm font-semibold md:text-base lg:text-sm xl:text-base">Lihat selengkapnya</span>
                                <img src={arrow} alt="right-arrow" className="transition-transform duration-200 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}