import { Container } from "@mui/material";
import React from "react";
import TerminalContext from "../../context/Terminal";

const Terminal = () => {
  const termit = React.useContext(TerminalContext);

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
      {termit.cmds?.map?.((cmd, index) => (
        <React.Fragment key={index}>
          <span className={"dollar"}>$</span>{" "}
          <span
            style={{
              color: "#fff",
            }}
          >
            {cmd.cmd}
          </span>{" "}
          <br />
          {cmd.response} <br />
        </React.Fragment>
      ))}
      <span className={"dollar"}>$</span> bash ./run.sh{" "}
      <span className="dollar twc">_</span>
    </Container>
  );
};

export default Terminal;
