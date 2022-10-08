import classNames from "classnames";
import "./SectionWrapper.scss";

export function SectionWrapper(props) {
  const classes = classNames("section-wrapper", {
    [props.className]: props.className,
  });
  return <div className={classes} id={props.id}>{props.children}</div>;
}
