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
            <div className="mx-5 text-white">
                <h2 className="text-3xl font-bold leading-relaxed line-bottom-testimoni relative font-rock-salt tracking-wider text-center lg:text-start lowercase">cerita di balik kerjasama nyata</h2>
                <div className="flex flex-row lg:flex-row gap-8 mt-8 justify-center flex-wrap">
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