import ProyekComponent from '../components/ProyekComponent';
import Katik from '../assets/Katik.svg';
import RumahListrik from '../assets/Rumah Listrik.svg';
import Sederhana from '../assets/Sederhana.svg';
import OPoint from '../assets/OPoint.svg';
import Diagram from '../assets/Diagram.svg';
import Simis from '../assets/Simis.svg';
import Perpustakaan from '../assets/Perpustakaan.svg';
import KicauMania from '../assets/Kicau Mania.svg';

export default function PortofolioSection() {
    return (
        <section className="bg-white py-8">
            <div className='mx-5 text-bg'>
                <h2 className="text-lg sm:text-xl font-bold relative line-bottom-portofolio font-rock-salt leading-relaxed tracking-wider lowercase">jejak karya dalam dunia digital</h2>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 mt-8 justify-center items-center sm:gap-8">
                    <ProyekComponent img={Katik} proyek="https://github.com/AugustAgung05/Katik" studiKasus="#" />
                    <ProyekComponent img={RumahListrik} proyek="https://www.figma.com/design/kdErqv5FqnUJS5d0Qrrosr/Rumah-Listrik?node-id=0-1&t=lvG4rSJQBvaDdAs8-1" studiKasus="#" />
                    <ProyekComponent img={Sederhana} proyek="https://www.figma.com/design/ehwbfhy7GPsmnN38cPXubM/Project-Sederhana?node-id=0-1&t=KaAxOIZK8pDgGf98-1" studiKasus="#" />
                    <ProyekComponent img={OPoint} proyek="https://www.figma.com/design/0atu4rhdcAK9R08RgMBEaA/o%E2%80%99Point?node-id=0-1&t=61yJcdaKfi70eMH3-1" studiKasus="#" />
                    <ProyekComponent img={Diagram} proyek="https://www.linkedin.com/in/anandaagungstyadi/" studiKasus="#" />
                    <ProyekComponent img={Simis} proyek="https://www.figma.com/design/9145xvxXjRRam0WH0bVNzU/Projek-SIMIS?node-id=0-1&t=jfajV1dqXaHDoOS7-1" studiKasus="#" />
                    <ProyekComponent img={Perpustakaan} proyek="https://www.linkedin.com/in/anandaagungstyadi/" studiKasus="#" />
                    <ProyekComponent img={KicauMania} proyek="https://www.figma.com/design/iKMrLFSznJ8NoUEbU1usbg/Kicau-Mania?node-id=0-1&t=pxUdYxPu517EYRc4-1" studiKasus="#" />
                </div>
            </div>
        </section>
    );
}