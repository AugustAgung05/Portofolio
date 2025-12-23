import Card from "./Card";
import htmlSkill from '../../assets/HTML Skill.svg';
import cssSkill from '../../assets/CSS SKill.svg';
import javascriptSkill from '../../assets/Javascript Skill.svg';
import reactSkill from '../../assets/React Skill.svg';
import figmaSkill from '../../assets/Figma Skill.svg';
import gitSkill from '../../assets/Git Skill.svg';
import tailwindSkill from '../../assets/Tailwind Skill.svg';
import mysqlSkill from '../../assets/MySQL Skill.svg';
import vueSkill from '../../assets/Vue Skill.svg';
import umlSkill from '../../assets/Diagram Skill.svg';
import { useEffect, useRef } from "react";

export default function Keahlian() {
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
        <section ref={ref} id="keahlian" className="scroll-m-8 opacity-0">
            <div className="px-5 md:px-7 py-12 lg:py-18 max-w-7xl mx-auto text-white">
                <h3 className="tagline-section custom-line-bottom-tagline" style={{ '--line-offset': '-120px' }}>
                    senjata utama dalam <br className="hidden md:block"/>
                    <span className="text-special">pengembangan digital</span>
                </h3>
                <div className="flex flex-wrap gap-3 mt-12 justify-center">
                    <Card img={htmlSkill} title="HTML" description="Front-End Development" />
                    <Card img={cssSkill} title="CSS" description="Front-End Development" />
                    <Card img={javascriptSkill} title="JavaScript" description="Front-End Development" />
                    <Card img={reactSkill} title="React" description="Front-End Development" />
                    <Card img={figmaSkill} title="Figma" description="UI/UX Design" />
                    <Card img={gitSkill} title="Git" description="Version Control System" />
                    <Card img={tailwindSkill} title="Tailwind CSS" description="Front-End Development" />
                    <Card img={mysqlSkill} title="MySQL" description="Back-End Development" />
                    <Card img={vueSkill} title="Vue.js" description="Front-End Development" />
                    <Card img={umlSkill} title="UML" description="System Design" />
                </div>
            </div>
        </section>
    );
};