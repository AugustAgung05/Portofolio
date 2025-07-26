import whatsapp from '../assets/whatsapp.svg';
import instagram from '../assets/instagram.svg';
import mail from '../assets/mail.svg';
import arrow from '../assets/arrow.svg';
import agung from '../assets/agung.png';
import background from '../assets/background.svg';
import CardComponent from '../components/CardComponent';
import IconComponent from '../components/IconCompoent';

import "../styles/style.css";

function AboutSection(){
    return (
        <>
            <section className="mt-12 2xl:mt-32 flex flex-col mx-5">
                <div className="lg:order-3 lg:mt-[-320px] lg:z-[-1] xl:mt-[-380px]">
                    <div className="relative max-w-[418px] mx-auto">
                        <img src={agung} className="max-w-[90%] mx-auto sm:max-w-full lg:max-w-[70%] xl:max-w-full rounded-sm" alt="Ananda Agung Styadi" />
                        <img src={background} className="max-w-[90%] absolute top-4 -right-1 z-[-1] sm:max-w-full sm:top-6 sm:-right-6 lg:max-w-[70%] lg:sm:right-9 xl:max-w-full xl:right-[-24px] opacity-60 rounded-sm 3xl:right-[-26px]" alt="Background" />
                    </div>
                    <div className="relative height-[500px] top-[-280px] max-w-[418px] mx-auto">
                        <CardComponent descriptionClass="ml-3 text-lg sm:text-2xl xl:text-3xl" titleClass="text-sm sm:text-base xl:text-lg" className="absolute top-[-130px] right-[-20px] sm:right-[-70px] lg:right-[-20px] lg:top-[20px] xl:right-[-80px] xl:top-[-60px]" title="Proyek Terselesaikan" description="6+"></CardComponent>
                        <CardComponent descriptionClass="mr-3 text-lg sm:text-2xl xl:text-3xl" titleClass="text-sm sm:text-base xl:text-lg" className="absolute top-[20px] left-[-20px] text-end sm:left-[-85px] lg:left-[-20px] lg:top-[110px] xl:left-[-70px] xl:top-[70px]" title="Tahun Pengalaman" description="3+"></CardComponent>
                        <CardComponent descriptionClass="ml-3 text-lg sm:text-2xl xl:text-3xl" titleClass="text-sm sm:text-base xl:text-lg" className="absolute top-[160px] right-[-20px] sm:right-[-70px] lg:right-[-8px] xl:right-[-75px] xl:top-[170px]" title="Klien | Partner" description="10+"></CardComponent>
                    </div>
                </div>

                <div className="flex flex-col justify-center mt-24 lg:flex-row lg:items-center">
                    <div className="mt-8 lg:w-full">
                        <h3 className="text-secondary text-xs tracking-wider font-extralight md:text-sm lg:text-xl xl:text-2xl 3xl:text-3xl">Hai, perkenalkan saya</h3>
                        <h1 className="text-light font-bold text-center text-2xl mt-4 lg:mt-6 lg:text-3xl lg:text-start lg:ml-3 lg:tracking-wide xl:text-4xl xl:ml-5 xl:tracking-wider 3xl:text-5xl">Ananda Agung Styadi</h1>
                        <hr className="w-[65%] md:w-[200px] border-[2.5px] mx-auto border-neon mt-3 lg:ml-3 lg:w-[250px] xl:w-[320px] xl:mt-4 xl:ml-6 3xl:w-[430px] 3xl:mt-5"/>
                        <div className="mt-6 lg:w-[300px] lg:mt-8 xl:w-[360px] 2xl:w-[470px] 3xl:w-[650px]"> 
                            <p className="text-sm md:text-base text-secondary leading-8 xl:text-base 3xl:text-lg">Mahasiswa Teknik Informatika semester 4 dengan banyak sertifikat di bidang pemrograman termasuk BNSP. Senang mengembangkan proyek pribadi dan proyek tugas.</p>
                        </div>
                    </div>

                    <div className="mt-20 lg:-mt-44 lg:max-w-[275px] xl:max-w-[330px] 2xl:max-w-[440px] 3xl:max-w-[620px]">
                        <h3 className="text-secondary text-xs tracking-wider font-extralight md:text-sm lg:text-xl xl:text-2xl 3xl:text-3xl">Layanan</h3>
                        <p className="mt-4 text-sm md:text-base leading-8 text-secondary lg:mt-6 xl:text-base 3xl:text-lg">Punya ide keren untuk website atau aplikasi? Akan kami bantu! Yuk, mulai sekarang dan jadikan ide kamu nyata!</p>
                        <div className="flex mt-4">
                            <a href="" className="flex gap-3 group xl:gap-5 3xl:gap-7">
                                <span className="text-neon text-sm  xl:text-base 3xl:text-lg">lihat selengkapnya</span>
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