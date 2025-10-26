import whatsapp from '../assets/whatsapp.svg';
import instagram from '../assets/instagram.svg';
import mail from '../assets/mail.svg';
import arrow from '../assets/arrow.svg';
import agung from '../assets/agung.png';
import CardComponent from '../components/CardComponent';
import IconComponent from '../components/IconCompoent';

import "../styles/style.css";

function AboutSection(){
    return (
        <>
            <section className="mt-12 lg:mt-26 xl:mt-44 flex flex-col mx-5 lg:mx-8">
                <div className="flex flex-col lg:gap-[38%] xl:gap-[39%] lg:min-h-[320px] justify-center lg:flex-row lg:items-center lg:relative">
                    <div className="lg:absolute lg:mt-[20px] z-[-1] mx-6 xs:mx-8 sm:mx-0">
                        <div className="relative max-w-[418px] mx-auto">
                            <img src={agung} className="max-w-full sm:max-w-full lg:mx-auto lg:max-w-[60%] xl:max-w-[80%] shadow-[16px_16px_#747474] sm:shadow-[18px_18px_#747474]" alt="Ananda Agung Styadi" />
                            <span className="absolute top-[30%] right-[-35px] sm:right-[-55px] lg:right-[0px] lg:top-[50%] xl:right-[-30px]">
                                <CardComponent descriptionClass="ml-3" title="Proyek Terselesaikan" description="12+"></CardComponent>
                            </span>
                            <span className="absolute top-[57%] left-[-33px] sm:left-[-50px] text-end lg:left-[15px] lg:top-[67.5%] xl:left-[-20px]">
                                <CardComponent descriptionClass="mr-3" title="Tahun Pengalaman" description="3+"></CardComponent>
                            </span>
                            <span className="absolute top-[82%] right-[-28px] sm:right-[-48px] lg:right-[4px] lg:top-[85%] xl:right-[-29px]">
                                <CardComponent descriptionClass="ml-3" title="Klien | Partner" description="10+"></CardComponent>
                            </span>
                        </div>
                    </div>

                    <div className="lg:min-w-[340px] mt-12 lg:mt-0 lg:self-end">
                        <h3 className="text-white text-xs sm:text-base tracking-wider font-light md:text-lg lg:text-sm xl:text-lg 3xl:text-3xl">Hai, perkenalkan saya</h3>
                        <h1 className="text-light  font-mono font-bold text-center text-2xl mt-4 lg:mt-6 lg:text-3xl lg:text-start lg:ml-3 lg:tracking-wide xl:text-3xl xl:ml-5 xl:tracking-wider 3xl:text-5xl">Ananda Agung Styadi</h1>
                        <hr className="w-[200px] sm:w-[280px] border-2 mx-auto border-neon mt-3 lg:ml-3 lg:w-[250px] xl:w-[330px] xl:mt-4 xl:ml-6 3xl:w-[430px] 3xl:mt-5"/>
                        <p className="mt-6 lg:mt-8 lg:w-[260px] xl:w-[330px] 2xl:w-[470px] 3xl:w-[650px] text-sm md:text-base lg:text-[13px] xl:text-base font-light text-secondary leading-8">
                            <span className="block lg:hidden">
                                Mahasiswa aktif dari program studi Teknik Informatika semester 5 yang telah memiliki <strong className="font-semibold"> sertifikat kompetensi BNSP</strong>. Berpengalaman dalam mengembangkan berbagai proyek pembelajaran dan selalu bersemangat memperdalam keterampilan di bidang teknologi informasi, mulai dari pemrograman, pengembangan aplikasi, hingga riset terbaru di industri digital.
                            </span>
                            <span className="hidden lg:block">
                                Mahasiswa teknik informatika semester 5 dengan <strong className="font-semibold"> sertifikat BNSP</strong>, aktif mengembangkan proyek dan keterampilan di bidang teknologi.
                            </span>
                        </p>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:max-w-[280px] xl:max-w-[330px] 2xl:max-w-[440px] 3xl:max-w-[620px] lg:self-start">
                        <h3 className="text-white text-xs sm:text-base tracking-wider font-light md:text-lg lg:text-sm xl:text-lg 3xl:text-3xl">Layanan</h3>
                        <p className="mt-3 text-sm md:text-base lg:text-[13px] xl:text-base font-light text-secondary lg:mt-6 leading-8">
                            <span className="hidden lg:block">
                                Punya ide keren untuk <strong className="font-semibold">website atau aplikasi</strong>? Akan kami bantu! Yuk, mulai sekarang dan jadikan ide kamu nyata!
                            </span>
                            <span className="block lg:hidden">
                                Punya ide menarik yang selama ini hanya tersimpan dalam pikiran, baik untuk website atau aplikasi impianmu? Jangan biarkan ide tersebut hanya menjadi wacana—tim kami siap mendampingi dari tahap <strong className="font-semibold">perencanaan, desain, hingga pengembangan</strong> agar ide kamu benar-benar menjadi kenyataan. Mulai sekarang, manfaatkan kesempatan ini untuk berkreasi, mengembangkan potensi, dan wujudkan gagasan digital yang berdampak untuk banyak orang!
                            </span>
                        </p>
                        <div className="flex mt-4">
                            <a href="" className="flex gap-3 group xl:gap-5 3xl:gap-7">
                                <span className="text-neon text-sm font-normal md:text-base lg:text-[13px] xl:text-base 3xl:text-lg">lihat selengkapnya</span>
                                <img src={arrow} alt="right-arrow" className="transition-transform duration-200 group-hover:translate-x-2 xl:scale-110 3xl:scale-140"/>
                            </a>
                        </div>
                        <div className="flex gap-6 mt-6 justify-center lg:justify-start xl:gap-8 xl:mt-8">
                            <IconComponent href="#" icon={whatsapp}/>
                            <IconComponent href="#" icon={instagram}/>
                            <IconComponent href="#" icon={mail}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default AboutSection;