import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import { SkillCategoryCard } from "./SkillCategoryCard/SkillCategoryCard";
import "./SkillsSection.scss";
import { skills } from "./skills";
import Masonry from "react-masonry-css";
import { useEffect } from "react";

export function SkillsSection(props) {
  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("scale-in", entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 };
    const elements = document.querySelectorAll('.skill-category-card');
    elements.forEach(el => {
      observer.observe(el, options);
    });
  }, [])

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
