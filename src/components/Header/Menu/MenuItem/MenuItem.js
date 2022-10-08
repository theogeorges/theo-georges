import classNames from "classnames";
import "./MenuItem.scss";

export function MenuItem(props) {
  const classes = classNames("menu-item", { active: props.active });
  return (
    <a className={classes} href={`#${props.anchor}`}>
      {props.children}
    </a>
  );
}
