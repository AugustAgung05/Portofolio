//eslint-disable-next-line
function IconComponent({ icon, href }) {
  return (
    <a href={href} className="group">
        <img src={icon} alt={`${icon}-icon`} className="transition-transform duration-200 group-hover:scale-110 xl:scale-[115%] xl:group-hover:scale-[115%] 2xl:scale-120 2xl:group-hover:scale-130"/>
    </a>
  );
}

export default IconComponent;