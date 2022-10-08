import classNames from "classnames";
import "./Button.scss";

export function Button(props) {
    const classes = classNames("button", {
        "button-elevated": props.elevated,
        [props.className]: props.className,
        [props.color]: props.color,
    });
    return (
        <button className={classes}>
            {props.children}
        </button>
    );
}