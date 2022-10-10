import Chip from "../../../../widgets/01-Atoms/Chip/Chip";
import "./PersonalProject.scss";

const PersonalProject = ({ title, description, tags, divider }) => {
  return (
    <div className="personal-project">
      <div className="title">{title}</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className="tags">
        {tags.map((item, index) => {
          return <Chip key={index}>{item}</Chip>;
        })}
      </div>
      {divider ? <hr /> : ""}
    </div>
  );
};

export default PersonalProject;
