import "../styles/style.css"

//eslint-disable-next-line
function CardComponent({ className, title, description, descriptionClass }) {
  return (
    <div className={`bg-bg p-[6px] not-only-of-type:xs:p-2 rounded-sm tracking-wider ${className}`}>
      <h3 className={`text-secondary font-light text-[10px] xs:text-[11px] s:text-[12px] sm:text-[13px] lg:text-[11px] xl:text-sm`}>{title}</h3>
      <h1 className={`font-bold text-neon mt-1 text-[12px] xs:text-sm s:text-base sm:text-lg lg:text-[15px] xl:text-lg ${descriptionClass}`}>{description}</h1>
    </div>
  );
}
export default CardComponent;