import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
// import avatar4 from "../assets/avatar-4.png";
// import avatar5 from "../assets/avatar-5.png";
// import avatar6 from "../assets/avatar-6.png";
// import avatar7 from "../assets/avatar-7.png";
// import avatar8 from "../assets/avatar-8.png";
// import avatar9 from "../assets/avatar-9.png";
// import avatar10 from "../assets/avatar-10.png";
import quote from "../assets/quote.svg";

export default function TestimoniComponent() {
    return (
        <section className="py-8">
            <div className="mx-5 lg:mx-12 text-white">
                <h2 className="font-semibold tracking-wide sm:text-lg lg:text-2xl md:text-center">Apa Kata Mereka</h2>
                <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] mt-3 lg:mt-8 font-bold leading-relaxed font-rock-salt line-bottom-testimoni tracking-wider relative order-1 lg:order-0 text-center lowercase">cerita di balik kerjasama nyata</h3>
                <div className="flex flex-row lg:flex-row gap-3 mt-10 lg:mt-12 justify-center flex-wrap">
                    <div className="p-6 bg-white/40 rounded-md testimoni-card">
                        <div className="p-4 border rounded-full inline-block">
                            <img src={quote} alt="Quote" className="rotate-180 w-8" />
                        </div>
                        <p className="mt-4 leading-relaxed">Kolaborasi dengan [nama kamu] benar-benar menyenangkan. Ia tidak hanya paham teknis, tapi juga mampu menerjemahkan kebutuhan bisnis ke dalam solusi digital yang efisien dan elegan.</p>
                        <div className="flex flex-row items-center gap-4 mt-8 upper-line relative">
                            <img src={avatar1} alt="Avatar 1" className="w-12" />
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-bg">Nama Klien</h3>
                                <p className="text-sm text-gray font-medium">Jabatan Klien</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-white/40 rounded-md">
                        <div className="p-4 border rounded-full inline-block">
                            <img src={quote} alt="Quote" className="rotate-180 w-8" />
                        </div>
                        <p className="mt-4 leading-relaxed">Kolaborasi dengan [nama kamu] benar-benar menyenangkan. Ia tidak hanya paham teknis, tapi juga mampu menerjemahkan kebutuhan bisnis ke dalam solusi digital yang efisien dan elegan.</p>
                        <div className="flex flex-row items-center gap-4 mt-8 upper-line relative">
                            <img src={avatar2} alt="Avatar 2" className="w-12" />
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-bg">Nama Klien</h3>
                                <p className="text-sm text-gray font-medium">Jabatan Klien</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-white/40 rounded-md">
                        <div className="p-4 border rounded-full inline-block">
                            <img src={quote} alt="Quote" className="rotate-180 w-8" />
                        </div>
                        <p className="mt-4 leading-relaxed">Kolaborasi dengan [nama kamu] benar-benar menyenangkan. Ia tidak hanya paham teknis, tapi juga mampu menerjemahkan kebutuhan bisnis ke dalam solusi digital yang efisien dan elegan.</p>
                        <div className="flex flex-row items-center gap-4 mt-8 upper-line relative">
                            <img src={avatar3} alt="Avatar 3" className="w-12" />
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-bg">Nama Klien</h3>
                                <p className="text-sm text-gray font-medium">Jabatan Klien</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-white/40 rounded-md">
                        <div className="p-4 border rounded-full inline-block">
                            <img src={quote} alt="Quote" className="rotate-180 w-8" />
                        </div>
                        <p className="mt-4 leading-relaxed">Kolaborasi dengan [nama kamu] benar-benar menyenangkan. Ia tidak hanya paham teknis, tapi juga mampu menerjemahkan kebutuhan bisnis ke dalam solusi digital yang efisien dan elegan.</p>
                        <div className="flex flex-row items-center gap-4 mt-8 upper-line relative">
                            <img src={avatar3} alt="Avatar 3" className="w-12" />
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-bg">Nama Klien</h3>
                                <p className="text-sm text-gray font-medium">Jabatan Klien</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}