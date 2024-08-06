/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 250,
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
    background: "#BB9265",
    borderRadius: "10px 0px 0px 10px",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const MenuBurger: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift" ||
          (event as React.KeyboardEvent).key === "space")
      ) {
        return;
      }

      setOpen(isOpen);
    };

  const list = (
    <List>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link href="/">
          <ListItemText primary="Home" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <Link href="/About">
          <ListItemText primary="About" />
        </Link>
      </ListItemButton>
    </List>
  );

  return (
    <>
      <StyledIconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close drawer"
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
          {list}
        </div>
      </StyledDrawer>
    </>
  );
};

export default MenuBurger;
