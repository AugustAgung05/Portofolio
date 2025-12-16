import arrow from '../../assets/arrow.svg';
import agung from '../../assets/agung.png';
import Card from './Card';

export default function About(){
    return (
        <>
            <section id="beranda" className="mt-12 lg:mt-26 xl:mt-44 flex flex-col mx-5 lg:mx-8">
                <div className="flex flex-col lg:gap-[38%] xl:gap-[42%] 2xl:gap-[37%] lg:min-h-[320px] justify-center lg:flex-row lg:items-center lg:relative">
                    <div className="lg:absolute lg:mt-[20px] z-[-1] mx-6 xs:mx-8 sm:mx-0 opacity-0 animate-fade-in fade-3">
                        <div className="relative max-w-[418px] mx-auto">
                            <img src={agung} className="max-w-full sm:max-w-full lg:mx-auto lg:max-w-[60%] xl:max-w-[80%] shadow-[16px_16px_#747474] sm:shadow-[18px_18px_#747474]" alt="Ananda Agung Styadi" />
                            <span className="absolute top-[30%] right-[-35px] sm:right-[-55px] lg:right-[0px] lg:top-[50%] xl:right-[-30px]">
                                <Card descriptionClass="ml-3" title="Proyek Terselesaikan" description="12+" className="fade-1"></Card>
                            </span>
                            <span className="absolute top-[57%] left-[-33px] sm:left-[-50px] text-end lg:left-[15px] lg:top-[67.5%] xl:left-[-20px]">
                                <Card descriptionClass="mr-3" title="Tahun Pengalaman" description="3+" className="fade-2"></Card>
                            </span>
                            <span className="absolute top-[82%] right-[-28px] sm:right-[-48px] lg:right-[4px] lg:top-[85%] xl:right-[-29px]">
                                <Card descriptionClass="ml-3" title="Klien | Partner" description="10+" className="fade-3"></Card>
                            </span>
                        </div>
                    </div>

                    <div className="lg:min-w-[340px] mt-12 lg:mt-0 lg:self-end opacity-0 animate-fade-in fade-1">
                        <h3 className="text-white tracking-wider font-medium text-sm md:text-base lg:text-sm xl:text-base 3xl:text-3xl">Hai, perkenalkan saya</h3>
                        <h1 className="text-light font-bold text-center lg:text-start mt-4 lg:mt-6 lg:ml-3 xl:ml-5 2xl:ml-0 tracking-wider text-[24px] md:text-[26px] lg:text-[24px] 2xl:text-[28px] 3xl:text-[32px] relative line-bottom-home font-rock-salt lowercase text-special">Ananda Agung Styadi</h1>
                        <p className="mt-6 lg:mt-8 lg:w-[260px] xl:w-[330px] 2xl:w-[390px] 3xl:w-[650px] text-sm md:text-base lg:text-[13px] xl:text-[15px] font-light text-secondary leading-8">
                            <span className="block lg:hidden">
                                Mahasiswa aktif dari program studi Teknik Informatika semester 5 yang telah memiliki <strong className="font-semibold"> sertifikat kompetensi BNSP</strong>. Berpengalaman dalam mengembangkan berbagai proyek pembelajaran dan selalu bersemangat memperdalam keterampilan di bidang teknologi informasi, mulai dari pemrograman, pengembangan aplikasi, hingga riset terbaru di industri digital.
                            </span>
                            <span className="hidden lg:block">
                                Mahasiswa teknik informatika semester 5 yang memiliki <strong className="font-semibold"> sertifikat BNSP</strong>, aktif mengembangkan proyek dan keterampilan di bidang teknologi.
                            </span>
                        </p>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:max-w-[280px] xl:max-w-[330px] 2xl:max-w-[350px] lg:self-start opacity-0 animate-fade-in fade-2">
                        <h3 className="text-white tracking-wider font-medium text-sm md:text-base lg:text-sm xl:text-base 3xl:text-3xl">Layanan</h3>
                        <p className="mt-4 text-sm md:text-base lg:text-[13px] xl:text-[15px] font-light text-secondary lg:mt-6 leading-8">
                            <span className="hidden lg:block">
                                Punya ide keren untuk <strong className="font-semibold">website atau aplikasi</strong>? Akan kami bantu! Yuk, mulai sekarang dan jadikan ide kamu nyata!
                            </span>
                            <span className="block lg:hidden">
                                Punya ide menarik yang selama ini hanya tersimpan dalam pikiran, baik untuk website atau aplikasi impianmu? Jangan biarkan ide tersebut hanya menjadi wacana—tim kami siap mendampingi dari tahap <strong className="font-semibold">perencanaan, desain, hingga pengembangan</strong> agar ide kamu benar-benar menjadi kenyataan. Mulai sekarang, manfaatkan kesempatan ini untuk berkreasi, mengembangkan potensi, dan wujudkan gagasan digital yang berdampak untuk banyak orang!
                            </span>
                        </p>
                        <div className="flex mt-4">
                            <a href="#layanan" className="flex gap-3 group xl:gap-5 3xl:gap-7">
                                <span className="text-special text-sm font-medium md:text-base lg:text-[13px] xl:text-[15px] 3xl:text-lg">lihat selengkapnya</span>
                                <img src={arrow} alt="right-arrow" className="transition-transform duration-200 group-hover:translate-x-2 xl:scale-110 3xl:scale-140"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}