import { Drawer, IconButton } from "@mui/material";
import React from "react";
import { FaBars } from "react-icons/fa";
import "./Drawer.scss";

const AppDrawer = ({ opened, onToggle, children }) => {
  return (
    <React.Fragment key="app-drawer" id="app-drawer">
      <IconButton onClick={() => onToggle(true)} color={"text"} id="app-drawer">
        <FaBars />
      </IconButton>
      <Drawer anchor={"left"} open={opened} onClose={() => onToggle(false)}>
        {children}
      </Drawer>
    </React.Fragment>
  );
};

export default AppDrawer;
