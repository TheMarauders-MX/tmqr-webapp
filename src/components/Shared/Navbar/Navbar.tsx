import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import "./styles.scss";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon data-tut="third__step" />
          </IconButton>
          <img src={"/images/logo.png"} alt="Liverpool logo" />
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={open} onClose={handleDrawerClose} />
    </>
  );
};

export default Navbar;
