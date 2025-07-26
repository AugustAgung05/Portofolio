export default function CollaborationComponent() {
  return (
    <div className="flex flex-col gap-8 sm:flex-row text-light mx-6 my-8 sm:items-center sm:justify-between">
        <h1 className="text-center sm:text-left font-bold text-2xl sm:text-3xl leading-relaxed sm:w-[60%]">Saya terbuka untuk kerja sama dan kolaborasi profesional.</h1>
        <div className="flex flex-col gap-3 items-center font-medium text-sm">
            <button className="bg-primary text-white rounded-lg border border-white px-13 py-3">Hubungi Saya</button>
            <button className="bg-secondary text-bg px-13 py-3 rounded-lg">Lihat Portofolio</button>
        </div>
    </div>
  );
}