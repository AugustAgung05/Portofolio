//eslint-disable-next-line
function IconComponent({ icon, href }) {
  return (
    <a href={href} className="group">
        <img src={icon} alt={`${icon}-icon`} className="transition-transform duration-200 group-hover:scale-110 xl:scale-120 xl:group-hover:scale-130"/>
    </a>
  );
}

export default IconComponent;