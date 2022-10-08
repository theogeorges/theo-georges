import "./Body.scss";
import { ContactSection } from "./ContactSection/ContactSection";
import { DiplomasSection } from "./DiplomasSection/DiplomasSection";
import { ExperienceSection } from "./ExperienceSection/ExperienceSection";
import { HomeSection } from "./HomeSection/HomeSection";
import { PersoSection } from "./PersoSection/PersoSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";

export function Body(props) {
  return (
    <div className="body" id="body">
      <HomeSection></HomeSection>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
      <PersoSection></PersoSection>
      <DiplomasSection></DiplomasSection>
      <ContactSection></ContactSection>
    </div>
  );
}
