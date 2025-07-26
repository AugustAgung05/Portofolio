//eslint-disable-next-line
export default function ProyekComponent({img, proyek, studiKasus}) {
  return (
    <div className="flex flex-col gap-1">
        <img className="max-w-max" src={img} alt={img}/>
        <div className="flex gap-8 justify-start">
            <a href={proyek} className="text-lg font-medium flex items-center gap-2">
                <span>Lihat Proyek</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12L12 2M12 2H3M12 2V11" stroke="#181C14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            <a href={studiKasus} className="text-lg font-medium flex items-center gap-2">
                <span>Studi Kasus</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.125 10.0801C8.125 9.04458 8.9645 8.20508 10 8.20508C11.0355 8.20508 11.875 9.04458 11.875 10.0801C11.875 11.1156 11.0355 11.9551 10 11.9551C8.9645 11.9551 8.125 11.1156 8.125 10.0801Z" fill="#181C14"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.66666 9.99992C1.66666 11.3661 2.02079 11.8262 2.72906 12.7463C4.14329 14.5836 6.51508 16.6666 9.99999 16.6666C13.4849 16.6666 15.8567 14.5836 17.2709 12.7463C17.9792 11.8262 18.3333 11.3661 18.3333 9.99992C18.3333 8.63375 17.9792 8.17369 17.2709 7.25353C15.8567 5.41622 13.4849 3.33325 9.99999 3.33325C6.51508 3.33325 4.14329 5.41622 2.72906 7.25353C2.02079 8.17369 1.66666 8.63375 1.66666 9.99992ZM9.99999 6.87492C8.2741 6.87492 6.87499 8.27403 6.87499 9.99992C6.87499 11.7258 8.2741 13.1249 9.99999 13.1249C11.7259 13.1249 13.125 11.7258 13.125 9.99992C13.125 8.27403 11.7259 6.87492 9.99999 6.87492Z" fill="#181C14"/>
                </svg>
            </a>
        </div>
    </div>
  );
}