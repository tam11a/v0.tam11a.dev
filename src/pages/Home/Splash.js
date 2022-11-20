import React from "react";

import { IconButton, Stack, Typography } from "@mui/material";

import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import moment from "moment";
import TerminalContext from "../../context/Terminal";

const Splash = () => {
  const termit = React.useContext(TerminalContext);
  return (
    <Stack
      direction={"column"}
      sx={{
        minHeight: "80vh",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 3,
      }}
      data-aos={"fade-up"}
    >
      <Typography
        sx={{
          fontSize: "1.8rem",
          "& span": {
            color: "primary.main",
          },
        }}
      >
        Hi! I'm <span>Tam</span>.
      </Typography>
      <Typography
        variant={"subtitle2"}
        sx={{
          textAlign: "center",
          color: "#aaa",
          "& span": {
            color: "primary.main",
          },
        }}
      >
        I'm <span>a Full-Stack Developer</span>. I'm a dedicated hard working
        team player with experience and excellent knowledge on cutting edge
        up-to-date web development technologies like <span>React JS</span>,{" "}
        <span>Node JS</span>, <span>Express JS</span>, <span>Python</span>,{" "}
        <span>MongoDB</span>, <span>MySQL</span> seeking a web developer role
        for web applications or websites. I will to utilize my{" "}
        <span>
          {moment().diff(moment("21/03/2020", "DD/MM/YYYY"), "years")} years{" "}
          {moment().diff(moment("21/03/2020", "DD/MM/YYYY"), "months") % 12}{" "}
          months{" "}
        </span>{" "}
        of experience as <span>Programmer</span> &{" "}
        <span>Full-Stack Developer</span> and excellent creative skills for
        achieve its goals.
      </Typography>
      <Stack direction={"row"}>
        <IconButton
          color={"primary"}
          onClick={() => termit.execute("github.lnk")}
        >
          <VscGithubAlt />
        </IconButton>
        <IconButton
          color={"primary"}
          onClick={() => termit.execute("whatsapp.lnk")}
        >
          <FaWhatsapp />
        </IconButton>
        <IconButton
          color={"primary"}
          onClick={() => termit.execute("linked-in.lnk")}
        >
          <SlSocialLinkedin />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Splash;
