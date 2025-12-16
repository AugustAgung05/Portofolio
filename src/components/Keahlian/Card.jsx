//eslint-disable-next-line
export default function Card({img, title, description}) {
    return(
        <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 w-[300px] h-[100px] flex items-center gap-6 shadow-lg group hover:border-cyan-500/50">
            <img src={img} alt={title} className="w-10"/>
            <div className="flex flex-col">
                <h3 className="text-lg font-bold tracking-wide group-hover:text-cyan-400 transition-colors">{title}</h3>
                <p className="text-sm text-secondary mt-2.5">{description}</p>
            </div>
        </div>
    )
}