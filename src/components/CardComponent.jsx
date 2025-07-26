import "../styles/style.css"

//eslint-disable-next-line
function CardComponent({ className, title, description, titleClass, descriptionClass }) {
  return (
    <div className={`bg-bg p-2 rounded-sm ${className}`}>
      <h3 className={`text-secondary font-light  ${titleClass}`}>{title}</h3>
      <h1 className={`font-extrabold text-neon mt-1 ${descriptionClass}`}>{description}</h1>
    </div>
  );
}

export default CardComponent;