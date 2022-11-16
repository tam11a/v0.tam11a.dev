import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "transparent",
      }}
      color={"secondary"}
      elevation={0}
    >
      <Toolbar>
        <Typography
          sx={{
            fontSize: "0.8em",
            fontFamily: "Monaco, Inconsolata, monospace",
            "& span": {
              fontSize: "1.3em",
              color: "secondary.main",
            },
          }}
        >
          {"</> "}
          <span>tam</span>.11a()
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
