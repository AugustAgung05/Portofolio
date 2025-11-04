export default function ContentComponent() {
  return (
    <div className="text-light mx-5 lg:mx-12">
        <h1 className="font-semibold tracking-wide sm:text-lg lg:text-2xl md:text-center">Tentang Saya</h1>
        <div className="flex flex-col lg:flex-row items-center gap-7 md:gap-12 mt-3 md:mt-8">
            <h2 className="font-bold tracking-wider font-rock-salt text-2xl lg:text-[28px] 2xl:text-[32px] leading-relaxed lg:w-[40%] relative line-bottom-about text-center lg:text-start lowercase">kisah singkat & awal mula perjalananku</h2>
            <div className="flex flex-col gap-3 font-light leading-relaxed text-sm md:text-base">
                <p>Saya memulai perjalanan di dunia teknologi karena rasa ingin tahu tentang cara kerja sistem. Itu yang mendorong saya menekuni Teknik Informatika.</p>
                <p>Di tengah proses belajar, saya tertarik pada UI/UX dan analisis sistem—bukan hanya soal sistem berjalan, tapi juga terasa nyaman bagi pengguna.</p>
                <p>Bagi saya, setiap proyek adalah kesempatan untuk menggabungkan logika teknis dan empati, menciptakan solusi digital yang bermanfaat.</p>
            </div>
        </div>
    </div>
  );
}