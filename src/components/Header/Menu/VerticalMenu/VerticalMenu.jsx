import { Divider } from "@mui/material";
import { useState } from "react";
import AppButton from "../../../../widgets/01-Atoms/Button/Button";
import AppDrawer from "../../../../widgets/02-Molecules/Drawer/Drawer";
import { Branding } from "../../Branding/Branding";
import "./VerticalMenu.scss";

const VerticalMenu = ({ items }) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = (open) => {
    setOpened(open);
  };
  return (
    <AppDrawer opened={opened} onToggle={handleToggle}>
      <div className="vertical-menu">
        <Branding onClick={() => handleToggle(false)} />
        <Divider />
        {items.map((item, index) => {
          return (
            <AppButton
              color={"text"}
              href={`#${item.anchor}`}
              active={item.active}
              key={index}
              onClick={() => handleToggle(false)}
            >
              {item.name}
            </AppButton>
          );
        })}
      </div>
    </AppDrawer>
  );
};

export default VerticalMenu;
