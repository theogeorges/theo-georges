import { FaCalendarAlt } from "react-icons/fa";
import IconText from "../../../../widgets/02-Molecules/IconText/IconText";
import "./DiplomaCard.scss";

const DiplomaCard = ({ name, title, school, city, date, icon }) => {
  return (
    <div className="diploma-card">
      <img src={icon} alt={school} className="school-icon" />
      <div className="details">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
        <IconText icon={<FaCalendarAlt />} text={date} />
        <div className="city-school">
          {school}, {city}
        </div>
      </div>
    </div>
  );
};

export default DiplomaCard;
