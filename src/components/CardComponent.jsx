import "../styles/style.css"

//eslint-disable-next-line
function CardComponent({ className, title, description, descriptionClass }) {
  return (
    <div className={`bg-bg p-2 rounded-sm tracking-wider ${className}`}>
      <h3 className={`text-secondary font-light text-xs sm:text-sm xl:text-base 2xl:text-lg`}>{title}</h3>
      <h1 className={`font-extrabold text-neon mt-1 text-lg sm:text-xl xl:text-2xl ${descriptionClass}`}>{description}</h1>
    </div>
  );
}
export default CardComponent;