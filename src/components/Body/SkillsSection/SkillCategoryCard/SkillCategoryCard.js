import "./SkillCategoryCard.scss";
import { SkillLevel } from "./SkillLevel/SkillLevel";

export function SkillCategoryCard(props) {
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
