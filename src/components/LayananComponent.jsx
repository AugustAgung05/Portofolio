export default function LayananComponent() {
  return (
    <section className="py-8 bg-white mt-14">
        <div className="mx-5 lg:mx-12 text-bg">
            <h1 className="font-semibold tracking-wide sm:text-lg lg:text-2xl md:text-center">Layanan</h1>
            <div className="flex flex-col lg:flex-row items-center gap-7 md:gap-12 mt-3 md:mt-8">
              <div className="grid gap-3 grid-cols-1 lg:grid-cols-[2fr_0.2fr_2fr] lg:w-2/3 order-2 lg:order-0">
                <div className="layanan-grid-1 col-span-1 lg:col-span-2 order-1 lg:order-0">
                  <h2 className="font-bold text-white tracking-wide">Pengembangan Website</h2>
                  <p className="text-sm mt-4 text-secondary font-medium">Membuat tampilan aplikasi yang menarik dan konsisten.</p>
                </div>
                <div className="layanan-grid-2 col-span-1 lg:col-span-1 order-3 lg:order-0">
                  <h2 className="font-bold text-white tracking-wide">Pengalaman Pengguna</h2>
                  <p className="text-sm mt-4 text-secondary font-medium">Mendesain alur sistem dengan diagram teknis.</p>
                </div>
                <div className="layanan-grid-3 col-span-1 lg:col-span-1 order-2 lg:order-0">
                  <h2 className="font-bold text-white tracking-wide">Desain UI/UX</h2>
                  <p className="text-sm mt-4 text-secondary font-medium">Merancang alur penggunaan yang efisien.</p>
                </div>
                <div className="layanan-grid-4 col-span-1 lg:col-span-2 order-4 lg:order-0">
                  <h2 className="font-bold text-white tracking-wide">Pemodelan Sistem</h2>
                  <p className="text-sm mt-4 text-secondary font-medium">Membuat representasi visual dari sistem.</p>
                </div>
              </div>
              <h1 className="lg:w-1/3 text-2xl lg:text-[28px] 2xl:text-[32px] font-bold leading-relaxed font-rock-salt line-bottom-layanan tracking-wider relative order-1 lg:order-0 text-center lg:text-start lowercase">4 aksi nyata dalam pengembangan digital</h1>
            </div>
        </div>
    </section>
  );
}
