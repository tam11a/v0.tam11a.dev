import { Container, InputBase, Stack, Typography } from "@mui/material";
import moment from "moment";
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
          {cmd?.cmd && (
            <>
              [{moment(cmd?.ts).format("HH:mm")}]
              <span
                style={{
                  color: "#fff",
                }}
              >
                [<span className="dollar">~</span>]
              </span>{" "}
              <span className={"dollar"}>$ </span>
              <span
                style={{
                  color: "#fff",
                }}
              >
                {cmd?.cmd}
              </span>{" "}
              <br />
            </>
          )}
          {cmd?.response && (
            <>
              <Typography
                variant={"caption"}
                sx={
                  {
                    // whiteSpace: "pre",
                  }
                }
              >
                {cmd?.response}
              </Typography>
              <br />
            </>
          )}
        </React.Fragment>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          termit.execute(termit.termit);
        }}
      >
        <InputBase
          startAdornment={
            <>
              [{moment().format("HH:mm")}]
              <span
                style={{
                  color: "#fff",
                }}
              >
                [<span className="dollar">{termit.directory}</span>]
              </span>
              <span className={"dollar"} style={{ margin: "0 8px" }}>
                $
              </span>
            </>
          }
          sx={{
            p: 0,
            m: 0,
            mt: "-2px",
            lineHeight: "1em",
            color: "unset",
            fontSize: "0.8rem",
            caretColor: (theme) => theme.palette.primary.main,
            caretShape: "underscore",
          }}
          value={termit.termit}
          onChange={(e) => termit.setTermit(e.target.value)}
        />
      </form>
      {/* <span className="dollar twc">_</span> */}
    </Container>
  );
};

export default Terminal;
