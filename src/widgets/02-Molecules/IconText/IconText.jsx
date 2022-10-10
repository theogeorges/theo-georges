import "./IconText.scss";

const IconText = ({ icon, text }) => {
  return (
    <div className="icon-text">
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default IconText;
