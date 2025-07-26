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
                <h2 className="text-lg sm:text-xl font-semibold">Beberapa Proyek yang Pernah Saya Kerjakan</h2>
                <hr className="w-[290px] sm:w-[490px] mt-3"/>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 mt-8 justify-center sm:gap-8">
                    <ProyekComponent img={Katik} proyek="#" studiKasus="#" />
                    <ProyekComponent img={RumahListrik} proyek="#" studiKasus="#" />
                    <ProyekComponent img={Sederhana} proyek="#" studiKasus="#" />
                    <ProyekComponent img={OPoint} proyek="#" studiKasus="#" />
                    <ProyekComponent img={Diagram} proyek="#" studiKasus="#" />
                    <ProyekComponent img={Simis} proyek="#" studiKasus="#" />
                    <ProyekComponent img={Perpustakaan} proyek="#" studiKasus="#" />
                    <ProyekComponent img={KicauMania} proyek="#" studiKasus="#" />
                </div>
            </div>
        </section>
    );
}