import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import "./styles.scss";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img src="images/logo.png" />
          {/* <Typography variant="h6">Liverpool</Typography> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
