import quote from "../../assets/quote.svg";

//eslint-disable-next-line
export default function Card({description, name, title, avatar}) {
    return(
        <div className="bg-gray-900/80 rounded-xl border border-gray-800 p-4 md:p-6 w-full s:w-[320px] sm:w-[350px] xl:w-[440px] text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(56,189,248,0.4)] hover:bg-[#0b141d]">
            <div className="p-4 border rounded-full w-fit">
                <img src={quote} alt="Quote" className="rotate-180 w-5" />
            </div>
           
            <p className="text-sm md:text-base mt-5 leading-relaxed">{description}</p>
           
           <div className="flex flex-row items-center gap-4 mt-8 upper-line relative">
                <img src={avatar} alt="Avatar 1" className="w-12" />
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm md:text-base">{name}</h3>
                    <p className="text-xs md:text-sm text-secondary">{title}</p>
                </div>
            </div>

        </div>
    );
}