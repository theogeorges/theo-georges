import "./Body.scss";
import { HomeSection } from "./HomeSection/HomeSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";

export function Body(props) {
  return (
    <div className="body" id="body">
      <HomeSection></HomeSection>
      <SkillsSection></SkillsSection>
      <div id="experience">experience</div>
      <div id="perso">experience</div>
      <div id="diplomas">experience</div>
      <div id="contact">experience</div>
    </div>
  );
}
