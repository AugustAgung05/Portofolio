import SkillComponent from "./SkillComponent";
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

export default function KeahlianComponent() {
    return (
        <section className="py-8 bg-white">
            <div className="mx-5 lg:mx-12 text-bg">
                <h2 className="font-semibold tracking-wide sm:text-lg lg:text-2xl md:text-center">Kemampuan Teknis</h2>
                <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] mt-3 lg:mt-8 font-bold leading-relaxed font-rock-salt line-bottom-keahlian tracking-wider relative order-1 lg:order-0 text-center lowercase">senjata utama dalam pengembangan digital</h3>
                <div className="flex flex-wrap gap-3 mt-10 lg:mt-12 justify-center">
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
};