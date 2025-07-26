//eslint-disable-next-line
function ContentComponent({ title, children, className, subtitle }) {
  return (
    <div className="text-light mx-8">
      <h2 className="font-bold text-xs md:text-sm xl:text-lg tracking-widest text-neon">&gt; {title} &lt;</h2>
      <h4 className="font-light md:text-lg xl:text-xl mt-3">{subtitle}</h4>
      <hr className={`mt-4 border-1 border-neon ${className}`}/>
      <div className="mt-8 xl:mt-12 leading-12 font-semibold tracking-wide md:text-lg xl:text-2xl text-center">
        {children}
      </div>
    </div>
  );
}

export default ContentComponent;