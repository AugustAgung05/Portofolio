//eslint-disable-next-line
export default function TaskComponent({img, title, description}) {
    return (
        <div className="w-[296px] h-[293px] bg-bg rounded-lg shadow-secondary flex flex-col items-center text-center">
            <img className="mt-11" src={img} alt={title} />
            <h3 className="text-lg font-semibold text-white mt-10 tracking-wider">{title}</h3>
            <p className="text-sm text-gray mt-4 w-[254px] tracking-wider">{description}</p>
        </div>
    )
}