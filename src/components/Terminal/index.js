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
          "0%": { color: "#8fcdff" },
          "50%": { color: "transparent" },
          "100%": { color: "#8fcdff" },
        },
        fontSize: "0.8em",
        color: "#aaa",
        "@font-face": {
          fontFamily: "Monaco",
          src: "url(/Monaco.woff)",
        },
        fontFamily: "Monaco, Inconsolata, monospace",
        "& *": {
          fontFamily: "Monaco, Inconsolata, monospace",
        },
        ".dollar": {
          fontWeight: "500",
          color: "#8fcdff",
        },
      }}
    >
      <span class={"dollar"}>$</span> bash ./run.sh{" "}
      <span class="dollar twc">_</span>
    </Container>
  );
};

export default Terminal;
