import classNames from "classnames";
import "./SkillLevel.scss";

export function SkillLevel(props) {
  return (
    <div className="skill-level">
      <img src={props.skill.iconPath} alt={props.skill.name} className="icon" />
      <div>
        <div className="name">{props.skill.name}</div>
        <div className="level">
          {[0, 1, 2, 3].map((item, index) => {
            const levelClasses = classNames("level-level", `level-${item}`, {
              green: props.skill.level >= item,
            });
            return <div className={levelClasses} key={index}></div>;
          })}
        </div>
      </div>
    </div>
  );
}
