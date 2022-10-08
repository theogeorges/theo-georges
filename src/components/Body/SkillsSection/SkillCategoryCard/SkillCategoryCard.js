import { useEffect } from "react";
import "./SkillCategoryCard.scss";
import { SkillLevel } from "./SkillLevel/SkillLevel";

export function SkillCategoryCard(props) {
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
    <div className="skill-category-card">
      <div>{props.name}</div>
      <div className="skills">
        {props.skills.map((item, index) => {
          return <SkillLevel skill={item} key={index} />;
        })}
      </div>
    </div>
  );
}
