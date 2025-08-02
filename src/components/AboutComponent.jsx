//eslint-disable-next-line
export default function ContentComponent() {
  return (
    <div className="text-light mx-5">
        <h1 className="font-medium tracking-wider sm:text-lg">Tentang Saya</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mt-4 md:mt-6">
            <h2 className="font-bold text-2xl md:text-3xl leading-relaxed md:w-[600px]">Kisah Singkat & Awal Mula Perjalananku</h2>
            <div className="flex flex-col gap-3 leading-relaxed text-sm md:text-base">
                <p>Saya memulai perjalanan di dunia teknologi karena rasa ingin tahu tentang cara kerja sistem. Itu yang mendorong saya menekuni Teknik Informatika.</p>
                <p>Di tengah proses belajar, saya tertarik pada UI/UX dan analisis sistem—bukan hanya soal sistem berjalan, tapi juga terasa nyaman bagi pengguna.</p>
                <p>Bagi saya, setiap proyek adalah kesempatan untuk menggabungkan logika teknis dan empati, menciptakan solusi digital yang bermanfaat.</p>
            </div>
        </div>
    </div>
  );
}