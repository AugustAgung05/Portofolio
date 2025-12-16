//eslint-disable-next-line
export default function Card({ className, title, description, descriptionClass }) {
  return (
    <div className={`bg-bg p-[6px] lg:p-3 not-only-of-type:xs:p-2 rounded-xl animate-float-card ${className}`}>
      <h1 className={`text-white font-light text-[10px] xs:text-[11px] s:text-[12px] sm:text-[13px] lg:text-[11px] xl:text-sm tracking-wide`}>{title}</h1>
      <h2 className={`font-bold mt-1 text-[12px] xs:text-sm s:text-base sm:text-lg lg:text-[15px] xl:text-lg tracking-wider ${descriptionClass}`}>
        <span className="text-special">{description}</span>
      </h2>
    </div>
  );
}