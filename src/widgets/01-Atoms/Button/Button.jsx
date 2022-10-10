import { Button } from "@mui/material";
import classNames from "classnames";
import "./Button.scss";

const AppButton = ({
  href,
  variant,
  color,
  children,
  active,
  target,
  onClick,
  className,
  download,
}) => {
  const classes = classNames(className, { active: active });
  return (
    <Button
      variant={variant}
      color={color}
      href={href}
      target={target}
      className={classes}
      onClick={onClick}
      download={download}
    >
      {children}
    </Button>
  );
};

export default AppButton;
