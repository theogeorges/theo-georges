import "./ExperienceContent.scss";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { buildExperienceDate } from "../ExperienceSectionUtils";
import Chip from "../../../../widgets/01-Atoms/Chip/Chip";

export function ExperienceContent({
  experience: { title, icon, company, city, tags, start, end, description },
}) {
  return (
    <div className="experience-content">
      <div className="title">{title}</div>
      <div className="icon-text">
        <img src={icon} width="20px" alt={company} />
        <span className="grey">{company}</span>
      </div>
      <div className="icon-text">
        <FaMapMarkerAlt color="red" className="place-icon" />
        <span className="grey">{city}</span>
      </div>
      <div className="icon-text date">
        <FaCalendarAlt color="grey" className="date-icon" />
        <span className="grey">{buildExperienceDate({ start, end })}</span>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className="tags">
        {tags.map((item, index) => {
          return <Chip key={index}>{item}</Chip>;
        })}
      </div>
    </div>
  );
}
