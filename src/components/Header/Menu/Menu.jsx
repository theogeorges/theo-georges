import Button from "../../../widgets/01-Atoms/Button/Button";
import "./Menu.scss";

const Menu = (props) => {
  return (
    <div className="menu">
      {props.items.map(function (item, index) {
        return (
          <Button
            color={"text"}
            href={`#${item.anchor}`}
            active={item.active}
            key={index}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default Menu;
