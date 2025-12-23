import Card from './Card';
import KicauManiaLogo from '../../assets/Kicau Mania Logo.svg';
import KatikLogo from '../../assets/Katik Logo.svg';
import RumahListrikLogo from '../../assets/Rumah Listrik Logo.svg';
import SederhanaLogo from '../../assets/Sederhana Logo.svg';
import OPointLogo from '../../assets/oPoint Logo.svg';
import DiagramLogo from '../../assets/Diagram Logo.svg';
import SimisLogo from '../../assets/SIMIS Logo.svg';
import PerpustakaanLogo from '../../assets/Perpustakaan Logo.svg';
import PregnaCareLogo from '../../assets/PregnaCare Logo.svg';
import InventoryLogo from '../../assets/Inventory Logo.svg';

import KicauMania1 from '../../assets/kicau-mania-3.png';
import KicauMania2 from '../../assets/kicau-mania-2.png';
import KicauMania3 from '../../assets/kicau-mania-1.png';
import KicauManiaDesign from '../../assets/kicau-mania-design.jpg';
import KicauMania from '../../assets/kicau-mania.png';

import Perpustakaan1 from '../../assets/perpustakaan-1.jpg';
import Perpustakaan2 from '../../assets/perpustakaan-2.jpg';
import Perpustakaan3 from '../../assets/perpustakaan-3.jpg';
import Perpustakaan4 from '../../assets/perpustakaan-4.jpg';
import Perpustakaan5 from '../../assets/perpustakaan-5.jpg';
import Perpustakaan from '../../assets/perpustakaan.png';

import Katik1 from '../../assets/katik-3.png';
import Katik2 from '../../assets/katik-2.png';
import Katik3 from '../../assets/katik-1.png';
import Katik from '../../assets/katik.png';

import Sederhana1 from '../../assets/sederhana-2.png';
import Sederhana2 from '../../assets/sederhana-1.png';
import SederhanaDesign from '../../assets/sederhana-design.jpg';
import Sederhana from '../../assets/sederhana.png';

import oPoint1 from '../../assets/opoint-3.png';
import oPoint2 from '../../assets/opoint-2.png';
import oPoint3 from '../../assets/opoint-1.png';
import oPointDesign from '../../assets/opoint-design.jpg';
import oPoint from '../../assets/opoint.png';

import RumahListrik1 from '../../assets/rumah-listrik-3.png';
import RumahListrik2 from '../../assets/rumah-listrik-2.png';
import RumahListrik3 from '../../assets/rumah-listrik-1.png';
import RumahListrikDesign from '../../assets/rumah-listrik-design.png';
import RumahListrikUML from '../../assets/rumah-listrik-uml.jpg';
import RumahListrik from '../../assets/rumah-listrik.png';

import Simis1 from '../../assets/simis-3.png';
import Simis2 from '../../assets/simis-2.png';
import Simis3 from '../../assets/simis-1.png';
import SimisDesign from '../../assets/simis-design.jpg';
import SimisUML from '../../assets/simis-uml.jpg';
import Simis from '../../assets/simis.png';

import PregnaCare1 from '../../assets/pregnacare-2.png';
import PregnaCare2 from '../../assets/pregnacare-3.png';
import PregnaCare3 from '../../assets/pregnacare-4.png';
import PregnaCare4 from '../../assets/pregnacare-5.png';
import PregnaCare5 from '../../assets/pregnacare-1.png';
import PregnaCareDesign from '../../assets/pregnacare-design.jpg';
import PregnaCare from '../../assets/pregnacare.png';

import Inventory1 from '../../assets/inventory-1.png';
import Inventory2 from '../../assets/inventory-2.png';
import Inventory3 from '../../assets/inventory-3.png';
import Inventory4 from '../../assets/inventory-4.png';
import Inventory5 from '../../assets/inventory-5.png';
import InventoryDesign from '../../assets/inventory-design.jpg';
import InventoryUML from '../../assets/inventory-uml.png';
import Inventory from '../../assets/inventory.png';

import Diagram1 from '../../assets/diagram-1.png';
import Diagram2 from '../../assets/diagram-2.png';
import Diagram3 from '../../assets/diagram-3.png';
import Diagram4 from '../../assets/diagram-4.png';
import Diagram from '../../assets/diagram.png';

import { useEffect, useRef } from "react";

export default function Portofolio() {
    const ref = useRef(null);
    
        useEffect(() => {
            const el = ref.current;
    
            const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                el.classList.add("animate-fade-in");
                observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
            );
    
            observer.observe(el);
        }, []);

    return (
        <section ref={ref} id="portofolio" className="scroll-m-10 opacity-0">
            <div className="px-5 md:px-7 py-12 lg:py-18 max-w-7xl mx-auto text-white">
                <h3 className="tagline-section line-bottom-tagline" style={{ '--line-offset': '-120px' }}>
                    jejak karya dalam <br className="hidden md:block" />
                    <span className="text-special">dunia digital</span>
                </h3>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-8 mt-12 justify-center items-center">
                    <Card category="Competition" title="PregnaCare" description="Mobile Application Design" logo={PregnaCareLogo} contentImg={[PregnaCare, PregnaCareDesign, PregnaCare1, PregnaCare2, PregnaCare3, PregnaCare4, PregnaCare5]} role="UI/UX Designer" contentDesc="Menggunakan pendekatan Empathic Design untuk aplikasi pendamping ibu hamil. Memadukan fitur pemantauan medis dengan antarmuka yang memberikan rasa tenang dan dukungan emosional bagi pengguna." scopes={["Mobile App Design", "User Empathy Research"]} tools={["Figma"]} features={["Pelacak Kesehatan & Nutrisi", "Monitor Pola Tidur", "Panduan Persalinan", "Forum Komunitas"]} link="https://www.figma.com/proto/B8pTmAPRzxUJmqfhKoVVWo/PregnaCare?node-id=0-1&p=f&t=JHAKY1azhCuUXkgZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=266%3A9886" />

                    
                    <Card category="Client" title="Inventory" description="Web Application Design" logo={InventoryLogo} contentImg={[Inventory, InventoryDesign, Inventory1, Inventory2, Inventory3, Inventory4, Inventory5, InventoryUML]} role="UI/UX Designer & Database Designer" contentDesc="Mendesain solusi digital end-to-end untuk manajemen inventaris pabrik. Selain merancang antarmuka visual yang efisien, saya juga membangun struktur relasi database (ERD) yang kompleks untuk memastikan validitas data arus barang, mulai dari penerimaan supplier hingga distribusi logistik." scopes={["Web App Design", "ERD & Database Modeling", "Complex Logic Mapping"]} tools={["Figma", "UML Tools"]} features={["Manajemen Supplier & Stok", "Dashboard Logistik", "Penjadwalan Pengiriman", "Perancangan Relasi Database (ERD)"]} link="https://www.figma.com/proto/A4Wnk74eayxNSHpB3gaEWq/Projek-Inventory--Client-?node-id=0-1&p=f&t=muLFh4TJm4WKQcwq-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A2178" />

                    
                    <Card category="Client" title="SIMIS" description="Web Application Design" logo={SimisLogo} contentImg={[Simis, SimisDesign, Simis1, Simis2, Simis3, SimisUML]} role="System Analyst & UI/UX Designer" contentDesc="Merancang arsitektur sistem manajemen aset sekolah secara menyeluruh. Mencakup seluruh siklus desain dari sketsa kasar (wireframe) untuk validasi alur. Sangat teknis dalam dokumentasi (ERD, DFD, Use Case) untuk memastikan logika backend selaras dengan antarmuka pengguna." scopes={["UI/UX Design", "System Documentation (UML)"]} tools={["Figma", "UML Tools"]} features={["Manajemen Aset (CRUD)", "Filter Data", "Export Laporan", "Sirkulasi Peminjaman", "Pelaporan Aset", "Visualisasi Data", "Pengaturan Sistem", "Dokumentasi Alur Sistem"]} link="https://www.figma.com/proto/9145xvxXjRRam0WH0bVNzU/Projek-SIMIS?node-id=1-3488&p=f&t=YVaGV2eO8kJrbuJh-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3488&starting-point-node-id=1%3A6614" />

                    
                    <Card category="Client" title="Perpustakaan" description="Mobile Application Design" logo={PerpustakaanLogo} contentImg={[Perpustakaan, Perpustakaan1, Perpustakaan2, Perpustakaan3, Perpustakaan4, Perpustakaan5]} role="" contentDesc="Merancang, menganalisis, dan mengembangkan sebuah web dashboard analitik perpustakaan digital secara menyeluruh, mencakup implementasi visualisasi data interaktif untuk melacak riwayat transaksi anggota, menganalisis durasi peminjaman, serta mengidentifikasi popularitas koleksi buku guna mendukung pengambilan keputusan strategis." scopes={["Full Stack Development", "Data Visualization", "Interactive UI Design."]} tools={["Javascript", "Chart.JS", "Node.JS", "MySQL Lite", "Laragon"]} features={["Real-time Visitor & Loan Metrics", "Collection Popularity Ranking", "Member Behavior Insight", "Advanced Transaction Report"]} link="https://github.com/AugustAgung05/Katik" />

                    
                    <Card category="Client" title="Sederhana" description="Mobile Application Design" logo={SederhanaLogo} contentImg={[Sederhana, SederhanaDesign, Sederhana1, Sederhana2]} role="UI/UX Designer" contentDesc="Proyek desain aplikasi mobile bertema produktivitas dan ketenangan. Mencakup seluruh siklus desain dari sketsa kasar (wireframe) untuk validasi alur, hingga desain visual akhir yang estetik dan menenangkan." scopes={["End-to-End Design (Wireframe to Mockup)"]} tools={["Figma"]} features={["Otentikasi User (Login/Register)", "Tema Visual Minimalis."]} link="https://www.figma.com/proto/ehwbfhy7GPsmnN38cPXubM/Project-Sederhana?node-id=0-1&p=f&t=9yRcwIj97HMWOIei-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A343" />

                    
                    <Card category="Client" title="Rumah Listrik" description="Mobile Application Design" logo={RumahListrikLogo} contentImg={[RumahListrik, RumahListrikDesign, RumahListrik1, RumahListrik2, RumahListrik3, RumahListrikUML]} role="System Analyst & UI/UX Designer" contentDesc="Menggabungkan desain layanan publik dengan analisis sistem yang mendalam. Merancang alur bisnis digital untuk layanan kelistrikan, dilengkapi diagram aktivitas untuk memastikan proses validasi data berjalan lancar." scopes={["System Documentation (UML)","UI/UX Design"]} tools={["Figma", "UML Tools"]} features={["Pemesanan Layanan Pasang Listrik", "Pembayaran Tagihan", "Konsultasi Kelistrikan", "Pengecekan Tagihan Listrik", "Booking Pemesanan", "Pelacakan Riwayat Layanan", "Pembayaran", "Dokumentasi Alur Sistem"]} link="https://www.figma.com/proto/kdErqv5FqnUJS5d0Qrrosr/Rumah-Listrik?node-id=0-1&p=f&t=HowH9yXMS3XVSDEe-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A547" />
                    

                    <Card category="Client" title="Diagram" description="UML Diagram Design" logo={DiagramLogo} contentImg={[Diagram, Diagram1, Diagram2, Diagram3, Diagram4]} role="System Analyst" contentDesc="Menerjemahkan kebutuhan aplikasi menjadi rancangan visual yang sistematis. Dokumentasi ini fokus memetakan alur aktivitas pengguna (user flow), logika bisnis, dan struktur data untuk menjadi panduan teknis yang jelas bagi pengembang sebelum masuk ke tahap coding." scopes={["End-to-End System Modeling", "Business Logic Design", "Technical Architecture Planning."]} tools={["UML Tools"]} features={["Pemetaan Alur Kerja", "Desain Interaksi Data"]} link="https://linkedin.com/in/anandaagungstyadi/"/>
                    
                    
                    <Card category="Task" title="o'Point" description="Web Application Design" logo={OPointLogo} contentImg={[oPoint, oPointDesign, oPoint1, oPoint2, oPoint3]} role="UI Designer" contentDesc="Mengembangkan desain dashboard operasional untuk toko ritel modern (terinspirasi sistem Point of Sales). Fokus pada visualisasi data transaksi dan stok agar pemilik toko dapat memantau performa bisnis secara real-time." scopes={["Dashboard UI", "Data Visualization"]} tools={["Figma"]} features={["Monitoring Penjualan", "Visualisasi Data", "Manajemen Pelanggan", "Laporan Keuangan"]} link="https://www.figma.com/proto/0atu4rhdcAK9R08RgMBEaA/o%E2%80%99Point?node-id=0-1&p=f&t=NDNNz4T191JRmBwS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=512%3A2" />

                    
                    <Card category="Client" title="Kicau Mania" description="Mobile Application Design" logo={KicauManiaLogo} contentImg={[KicauMania, KicauManiaDesign, KicauMania1, KicauMania2, KicauMania3]} role="UI Designer" contentDesc="Merancang antarmuka aplikasi teknologi finansial (Fintech) yang berfokus pada kemudahan transaksi digital bagi pengguna awam. Desain ini mengutamakan aksesibilitas dengan gaya clean UI untuk meminimalkan hambatan kognitif pengguna dalam melakukan manajemen keuangan sehari-hari." scopes={["High-Fidelity Design", "Prototyping"]} tools={["Figma"]} features={["Sistem Top-up & Transfer Antar Bank", "Pembayaran PPOB (Pulsa, Listrik, Pajak, Internet)", "Manajemen Virtual Account"]} link="https://www.figma.com/proto/iKMrLFSznJ8NoUEbU1usbg/Kicau-Mania?node-id=0-1&p=f&t=WMmxvNKUJPmborrH-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A12358" />

                    
                    <Card category="Personal" title="Katik" description="Web Application" logo={KatikLogo} contentImg={[Katik, Katik1, Katik2, Katik3]} role="Frontend Developer" contentDesc="Mengembangkan aplikasi web utilitas matematika untuk menghitung luas dan keliling berbagai bangun datar secara instan. Fokus utama proyek ini adalah implementasi logika algoritma matematika yang akurat serta antarmuka yang responsif. Mengintegrasikan pustaka eksternal untuk meningkatkan pengalaman pengguna melalui notifikasi interaktif dan sistem umpan balik langsung." scopes={["Web Development", "Logic Scripting"]} tools={["HTML", "Tailwind CSS", "JavaScript", "Toastr", "EmailJS"]} features={["Kalkulasi Bangun Datar", "Validasi Input Real-time", "Sistem Notifikasi (Toastr)", "Feedback Integration (EmailJS)"]} link="https://augustagung05.github.io/Katik/" />
                </div>
            </div>
        </section>
    );
}