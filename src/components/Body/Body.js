import "./Body.scss";
import { ExperienceSection } from "./ExperienceSection/ExperienceSection";
import { HomeSection } from "./HomeSection/HomeSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";

export function Body(props) {
  return (
    <div className="body" id="body">
      <HomeSection></HomeSection>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
      <div id="experience">experience</div>
      <div id="perso">experience</div>
      <div id="diplomas">experience</div>
      <div id="contact">experience</div>
    </div>
  );
}
