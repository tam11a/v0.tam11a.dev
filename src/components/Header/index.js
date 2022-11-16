import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { CgMenuRight } from "react-icons/cg";
import useToggle from "../../hooks/useToggle";

const Index = () => {
  const { value: open, toggleValue: onClose } = useToggle();
  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "transparent",
      }}
      color={"secondary"}
      elevation={0}
    >
      <Toolbar
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.8em",
            fontFamily: "Monaco, Inconsolata, monospace",
            letterSpacing: "1px",
            color: "unset",
            textDecoration: "none",
            "& span": {
              // fontSize: "1.3em",
              color: "primary.main",
            },
          }}
          component={Link}
          to={"/"}
        >
          {"</> "}
          <span>tam11a</span>.dev
        </Typography>

        <Hidden mdDown>
          <Navigations />
        </Hidden>
        <Hidden mdUp>
          <IconButton color={"primary"} onClick={onClose}>
            <CgMenuRight />
          </IconButton>
          <NavDrawer open={open} onClose={onClose} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

const NavDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={"right"}
      PaperProps={{
        sx: {
          width: "95vw",
          maxWidth: "300px",
        },
      }}
    >
      <Navigations orientation={"vertical"} />
    </Drawer>
  );
};

const Navigations = ({ orientation }) => {
  return (
    <Stack
      direction={orientation === "vertical" ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: { xs: "50vh", md: "unset" },
      }}
    >
      <ToggleButtonGroup
        value={""}
        orientation={orientation || "horizontal"}
        color={"secondary"}
        size={"small"}
        sx={{
          mr: { xs: 0, md: 2 },
        }}
        fullWidth
      >
        <ToggleButton value={""}>./about</ToggleButton>
        <ToggleButton value={"/experience"}>./experience</ToggleButton>
        <ToggleButton value={"/work"}>./work</ToggleButton>
        {/* <ToggleButton>./blog</ToggleButton> */}
        <ToggleButton value={"/blogs"}>./blogs</ToggleButton>
      </ToggleButtonGroup>
      {orientation === "vertical" && <Divider flexItem sx={{ my: 2 }} />}
      <Button variant={"outlined"} color={"primary"} size={"small"}>
        resume
      </Button>
    </Stack>
  );
};

export default Index;
