//eslint-disable-next-line
export default function SkillComponent({img, title, description}) {
    return(
        <div className="w-[319px] h-[100px] bg-bg flex items-center gap-6 rounded-lg shadow-lg p-6">
            <img src={img} alt={title} />
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white tracking-wider">{title}</h3>
                <p className="text-sm text-gray mt-3 tracking-wider">{description}</p>
            </div>
        </div>
    )
}