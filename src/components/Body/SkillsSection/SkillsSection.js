import Masonry from "react-masonry-css";
import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import { SkillCategoryCard } from "./SkillCategoryCard/SkillCategoryCard";
import { skills } from "./skills";
import "./SkillsSection.scss";

export function SkillsSection(props) {
  return (
    <SectionWrapper className="skills-section" id="skills">
      <SectionTitle>Compétences</SectionTitle>
      <Masonry
        breakpointCols={{ default: 4, 1200: 2, 768: 2, 620: 1 }}
        className="skills-grid"
      >
        {Object.entries(skills).map(([key, value], index) => {
          return <SkillCategoryCard name={key} skills={value} key={index} />;
        })}
      </Masonry>
    </SectionWrapper>
  );
}
