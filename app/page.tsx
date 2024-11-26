'use client'

import SkillsSection from "@/app/_components/ui/SkillsSection/SkillsSection";
import ContactSection from "@/app/_components/ui/ContactSection/ContactSection";
import AboutSection from "@/app/_components/ui/AboutSection/AboutSection";
import ExperienceSection from "@/app/_components/ui/ExperiencesSection/ExperienceSection";
import EducationSection from "@/app/_components/ui/EducationSection/EducationSection";
import ProjectsSection from "@/app/_components/ui/ProjectsSection/ProjectsSection";
import AnimateInView from "@/app/_components/ui/AnimateInView";

export default function Home() {


    return (<>
        <AboutSection/>

        <AnimateInView sectionname={'experience'}>
            <ExperienceSection/>
        </AnimateInView>

        <AnimateInView sectionname={'skills'}>
            <SkillsSection/>
        </AnimateInView>
        <AnimateInView sectionname={'education'}>
            <EducationSection/>
        </AnimateInView>

        <AnimateInView sectionname={'projects'}>
            <ProjectsSection/>
        </AnimateInView>

        <ContactSection/>
    </>);
}
