import "../styles/style.css"

//eslint-disable-next-line
function CardComponent({ className, title, description, descriptionClass }) {
  return (
    <div className={`bg-bg p-2 rounded-sm tracking-wider ${className}`}>
      <h3 className={`text-secondary font-light text-sm md:text-base xl:text-lg`}>{title}</h3>
      <h1 className={`font-extrabold text-neon mt-1 text-lg sm:text-2xl xl:text-3xl ${descriptionClass}`}>{description}</h1>
    </div>
  );
}
export default CardComponent;