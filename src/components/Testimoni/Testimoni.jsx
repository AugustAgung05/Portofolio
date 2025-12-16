import avatar1 from "../../assets/avatar-1.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";
import avatar5 from "../../assets/avatar-5.png";
import avatar6 from "../../assets/avatar-6.png";
import avatar7 from "../../assets/avatar-7.png";
import avatar8 from "../../assets/avatar-8.png";
import avatar9 from "../../assets/avatar-9.png";
import Card from "./Card";
import { useEffect, useRef } from "react";

export default function Testimoni() {
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
        <section ref={ref} id="testimoni" className="py-16 opacity-0">
            <div className="mx-5 lg:mx-12">
                <h3 className="tagline-section line-bottom-tagline text-white">
                    cerita di balik <br className="hidden md:block" />
                    <span className="text-special">kerjasama nyata</span>
                </h3>
                <div className="block md:hidden">
                    <div className="flex flex-col gap-5 justify-center items-center mt-10">
                        <Card
                            description="Bekerja dengan Agung selalu terasa lancar. Ia cepat memahami tujuan proyek dan mampu menyusun solusi digital yang relevan, rapi, dan langsung bisa memberikan dampak nyata."
                            name="Ardra"
                            title="Mahasiswa"
                            avatar={avatar1}
                        />
                        <Card
                            description="Kolaborasi bersama Nanda sangat efektif. Ia bukan hanya ahli teknis, tetapi juga memahami alur bisnis sehingga hasil akhirnya selalu tepat sasaran dan mudah diimplementasikan."
                            name="Wildan"
                            title="Mahasiswa"
                            avatar={avatar3}
                        />
                        <Card
                            description="Agung menunjukkan profesionalisme tinggi. Ia mendengar kebutuhan dengan teliti dan mengubahnya menjadi produk digital yang fungsional, modern, dan sangat mudah digunakan."
                            name="Ahsanda"
                            title="Mahasiswa"
                            avatar={avatar9}
                        />
                        <Card
                            description="Kerja bareng Nanda benar-benar memuaskan. Ia mampu menggabungkan analisis bisnis dengan kreativitas teknis sehingga menghasilkan output yang stabil dan bernilai untuk pengguna."
                            name="Reyhan"
                            title="Mahasiswa"
                            avatar={avatar4}
                        />
                    </div>
                </div>
                <div className="hidden md:block xl:hidden">
                    <div className="mt-14 lg:mt-18 h-[1600px] xl:h-auto flex flex-row gap-5 justify-center items-center overflow-y-hidden">
                        <div className="animate-move-up-1 flex flex-col gap-5">
                            <Card
                                description="Agung selalu hadir dengan solusi yang matang. Ia tidak hanya menyelesaikan tugas, tetapi juga memastikan setiap keputusan selaras dengan kebutuhan bisnis dan tujuan proyek."
                                name="Asep"
                                title="Pengusaha"
                                avatar={avatar5}
                            />
                            <Card
                                description="Nanda memiliki pemahaman teknis yang kuat, namun yang paling mengesankan adalah kemampuannya menyederhanakan masalah bisnis menjadi fitur digital yang jelas dan efektif."
                                name="Gilang"
                                title="Freelance"
                                avatar={avatar6}
                            />
                            <Card
                                description="Kolaborasi dengan Agung memberikan pengalaman kerja yang profesional dan efisien. Ia mampu menangkap inti kebutuhan dan menyusunnya menjadi solusi digital yang praktis dan elegan."
                                name="Anggun"
                                title="Perawat"
                                avatar={avatar8}
                            />
                            <Card
                                description="Bersama Nanda, proses pengembangan terasa terstruktur. Ia cekatan memahami konteks, menawarkan saran yang relevan, dan menghadirkan hasil yang selaras dengan kebutuhan bisnis."
                                name="Ocefath"
                                title="Mahasiswa"
                                avatar={avatar7}
                            />
                        </div>
                        <div className="animate-move-up-2 flex flex-col gap-5">
                            <Card
                                description="Bekerja dengan Agung selalu terasa lancar. Ia cepat memahami tujuan proyek dan mampu menyusun solusi digital yang relevan, rapi, dan langsung bisa memberikan dampak nyata."
                                name="Ardra"
                                title="Mahasiswa"
                                avatar={avatar1}
                            />
                            <Card
                                description="Kolaborasi bersama Nanda sangat efektif. Ia bukan hanya ahli teknis, tetapi juga memahami alur bisnis sehingga hasil akhirnya selalu tepat sasaran dan mudah diimplementasikan."
                                name="Wildan"
                                title="Mahasiswa"
                                avatar={avatar3}
                            />
                            <Card
                                description="Agung menunjukkan profesionalisme tinggi. Ia mendengar kebutuhan dengan teliti dan mengubahnya menjadi produk digital yang fungsional, modern, dan sangat mudah digunakan."
                                name="Ahsanda"
                                title="Mahasiswa"
                                avatar={avatar9}
                            />
                            <Card
                                description="Kerja bareng Nanda benar-benar memuaskan. Ia mampu menggabungkan analisis bisnis dengan kreativitas teknis sehingga menghasilkan output yang stabil dan bernilai untuk pengguna."
                                name="Reyhan"
                                title="Mahasiswa"
                                avatar={avatar4}
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block">
                    <div className="relative overflow-x-hidden mt-22 [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] [mask-mode:alpha]">
                        <div className="flex flex-row gap-8 group py-2">
                            <ul className="list-none flex items-center gap-8 shrink-0 animate-marquee-comment group-hover:paused">
                                <li>
                                    <Card
                                        description="Bekerja dengan Agung selalu terasa lancar. Ia cepat memahami tujuan proyek dan mampu menyusun solusi digital yang relevan, rapi, dan langsung bisa memberikan dampak nyata."
                                        name="Ardra"
                                        title="Mahasiswa"
                                        avatar={avatar1}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Kolaborasi bersama Nanda sangat efektif. Ia bukan hanya ahli teknis, tetapi juga memahami alur bisnis sehingga hasil akhirnya selalu tepat sasaran dan mudah diimplementasikan."
                                        name="Wildan"
                                        title="Mahasiswa"
                                        avatar={avatar3}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Agung menunjukkan profesionalisme tinggi. Ia mendengar kebutuhan dengan teliti dan mengubahnya menjadi produk digital yang fungsional, modern, dan sangat mudah digunakan."
                                        name="Ahsanda"
                                        title="Mahasiswa"
                                        avatar={avatar9}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Kerja bareng Nanda benar-benar memuaskan. Ia mampu menggabungkan analisis bisnis dengan kreativitas teknis sehingga menghasilkan output yang stabil dan bernilai untuk pengguna."
                                        name="Reyhan"
                                        title="Mahasiswa"
                                        avatar={avatar4}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Agung selalu hadir dengan solusi yang matang. Ia tidak hanya menyelesaikan tugas, tetapi juga memastikan setiap keputusan selaras dengan kebutuhan bisnis dan tujuan proyek."
                                        name="Asep"
                                        title="Pengusaha"
                                        avatar={avatar5}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Nanda memiliki pemahaman teknis yang kuat, namun yang paling mengesankan adalah kemampuannya menyederhanakan masalah bisnis menjadi fitur digital yang jelas dan efektif."
                                        name="Gilang"
                                        title="Freelance"
                                        avatar={avatar6}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Kolaborasi dengan Agung memberikan pengalaman kerja yang profesional dan efisien. Ia mampu menangkap inti kebutuhan dan menyusunnya menjadi solusi digital yang praktis dan elegan."
                                        name="Anggun"
                                        title="Perawat"
                                        avatar={avatar8}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Bersama Nanda, proses pengembangan terasa terstruktur. Ia cekatan memahami konteks, menawarkan saran yang relevan, dan menghadirkan hasil yang selaras dengan kebutuhan bisnis."
                                        name="Ocefath"
                                        title="Mahasiswa"
                                        avatar={avatar7}
                                    />
                                </li>
                            </ul>
                            <ul className="list-none flex items-center gap-8 shrink-0 animate-marquee-comment group-hover:paused">
                                <li>
                                    <Card
                                        description="Bekerja dengan Agung selalu terasa lancar. Ia cepat memahami tujuan proyek dan mampu menyusun solusi digital yang relevan, rapi, dan langsung bisa memberikan dampak nyata."
                                        name="Ardra"
                                        title="Mahasiswa"
                                        avatar={avatar1}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Kolaborasi bersama Nanda sangat efektif. Ia bukan hanya ahli teknis, tetapi juga memahami alur bisnis sehingga hasil akhirnya selalu tepat sasaran dan mudah diimplementasikan."
                                        name="Wildan"
                                        title="Mahasiswa"
                                        avatar={avatar3}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Agung menunjukkan profesionalisme tinggi. Ia mendengar kebutuhan dengan teliti dan mengubahnya menjadi produk digital yang fungsional, modern, dan sangat mudah digunakan."
                                        name="Ahsanda"
                                        title="Mahasiswa"
                                        avatar={avatar9}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Kerja bareng Nanda benar-benar memuaskan. Ia mampu menggabungkan analisis bisnis dengan kreativitas teknis sehingga menghasilkan output yang stabil dan bernilai untuk pengguna."
                                        name="Reyhan"
                                        title="Mahasiswa"
                                        avatar={avatar4}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Agung selalu hadir dengan solusi yang matang. Ia tidak hanya menyelesaikan tugas, tetapi juga memastikan setiap keputusan selaras dengan kebutuhan bisnis dan tujuan proyek."
                                        name="Asep"
                                        title="Pengusaha"
                                        avatar={avatar5}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Nanda memiliki pemahaman teknis yang kuat, namun yang paling mengesankan adalah kemampuannya menyederhanakan masalah bisnis menjadi fitur digital yang jelas dan efektif."
                                        name="Gilang"
                                        title="Freelance"
                                        avatar={avatar6}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Kolaborasi dengan Agung memberikan pengalaman kerja yang profesional dan efisien. Ia mampu menangkap inti kebutuhan dan menyusunnya menjadi solusi digital yang praktis dan elegan."
                                        name="Anggun"
                                        title="Perawat"
                                        avatar={avatar8}
                                    />
                                </li>
                                <li>
                                    <Card
                                        description="Bersama Nanda, proses pengembangan terasa terstruktur. Ia cekatan memahami konteks, menawarkan saran yang relevan, dan menghadirkan hasil yang selaras dengan kebutuhan bisnis."
                                        name="Ocefath"
                                        title="Mahasiswa"
                                        avatar={avatar7}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
