import TaskComponent from "../components/TaskComponent";
import SkillComponent from "../components/SkillComponent";
import desainAntarmuka from '../assets/Desain Antarmuka.svg';
import pengembanganWebsite from '../assets/Pengembangan Web.svg';
import pengalamanPengguna from '../assets/Pengalaman Pengguna.svg';
import pemodelanSistem from '../assets/Pemodelan Sistem.svg';
import htmlSkill from '../assets/HTML Skill.svg';
import cssSkill from '../assets/CSS SKill.svg';
import javascriptSkill from '../assets/Javascript Skill.svg';
import reactSkill from '../assets/React Skill.svg';
import figmaSkill from '../assets/Figma Skill.svg';
import gitSkill from '../assets/Git Skill.svg';
import tailwindSkill from '../assets/Tailwind Skill.svg';
import mysqlSkill from '../assets/MySQL Skill.svg';
import vueSkill from '../assets/Vue Skill.svg';
import umlSkill from '../assets/Diagram Skill.svg';

export default function LayananSection() {
    return (
        <section className="py-8 bg-white mt-14">
            <div className="mx-5 text-bg">
                <h1 className="font-medium sm:text-lg tracking-wide">Layanan</h1>
                <h2 className="text-lg sm:text-xl font-semibold mt-3">Apa saja yang bisa saya kerjakan?</h2>
                <hr className="sm:w-[390px] mt-3 border-bg"/>
                <div className="flex flex-wrap sm:flex-row mt-8 justify-center gap- lg:gap-12">
                    <TaskComponent
                        img={pengembanganWebsite}
                        title="Pengembangan Website"
                        description="Membuat tampilan aplikasi yang menarik dan konsisten."
                    />
                    <TaskComponent
                        img={desainAntarmuka}
                        title="Desain UI/UX"
                        description="Merancang alur penggunaan yang efisien."
                    />
                    <TaskComponent
                        img={pengalamanPengguna}
                        title="Pengalaman Pengguna"
                        description="Mendesain alur sistem dengan diagram teknis."
                    />
                    <TaskComponent
                        img={pemodelanSistem}
                        title="Pemodelan Sistem"
                        description="Mengimplementasikan UI ke dalam kode web."
                    />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mt-12">Keahlian yang saya miliki</h2>
                <hr className="w-[260px] sm:w-[265px] mt-3"/>
                <div className="flex flex-wrap gap-5 mt-8 justify-center">
                    <SkillComponent img={htmlSkill} title="HTML" description="Front-End Development" />
                    <SkillComponent img={cssSkill} title="CSS" description="Front-End Development" />
                    <SkillComponent img={javascriptSkill} title="JavaScript" description="Front-End Development" />
                    <SkillComponent img={reactSkill} title="React" description="Front-End Development" />
                    <SkillComponent img={figmaSkill} title="Figma" description="UI/UX Design" />
                    <SkillComponent img={gitSkill} title="Git" description="Version Control System" />
                    <SkillComponent img={tailwindSkill} title="Tailwind CSS" description="Front-End Development" />
                    <SkillComponent img={mysqlSkill} title="MySQL" description="Back-End Development" />
                    <SkillComponent img={vueSkill} title="Vue.js" description="Front-End Development" />
                    <SkillComponent img={umlSkill} title="UML" description="System Design" />
                </div>
            </div>
        </section>
    );
}