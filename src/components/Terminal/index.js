import { Container } from "@mui/material";
import React from "react";

const Terminal = () => {
  return (
    <Container
      sx={{
        bgcolor: "#00000011",
        height: "100vh",
        py: 2,
        ".twc": {
          animation: "twc-anime 1s infinite",
        },
        "@keyframes twc-anime": {
          "0%": { color: "primary.main" },
          "50%": { color: "transparent" },
          "100%": { color: "primary.main" },
        },
        fontSize: "0.8em",
        color: "#aaa",
        fontFamily: "Monaco, Inconsolata, monospace",
        "& *": {
          fontFamily: "Monaco, Inconsolata, monospace",
        },
        ".dollar": {
          fontWeight: "500",
          color: "primary.main",
        },
      }}
    >
      <span className={"dollar"}>$</span> bash ./run.sh{" "}
      <span className="dollar twc">_</span>
    </Container>
  );
};

export default Terminal;
