import { Button } from "../../../widgets/01-Atoms/Button/Button";
import "./Menu.scss";
import { MenuItem } from "./MenuItem/MenuItem";

export function Menu(props) {
  return (
    <div className="menu">
      {props.items.map(function (item, index) {
        return (
          <MenuItem anchor={item.anchor} active={item.active} key={index}>
            <Button>{item.name}</Button>
          </MenuItem>
        );
      })}
    </div>
  );
}
