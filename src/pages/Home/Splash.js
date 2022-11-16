import React from "react";

import { IconButton, Stack, Typography } from "@mui/material";

import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Splash = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        minHeight: "80vh",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 3,
      }}
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
          "& span": {
            color: "primary.main",
          },
        }}
      >
        I'm <span>a Full-Stack Developer</span>. Lorem <span>ipsum</span> dolor
        sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
        vel sint commodi repudiandae consequuntur voluptatum{" "}
        <span>laborum</span> numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident{" "}
        <span>similique accusantium nemo autem</span>.
      </Typography>
      <Stack direction={"row"}>
        <IconButton color={"primary"}>
          <VscGithubAlt />
        </IconButton>
        <IconButton color={"primary"}>
          <FaInstagram />
        </IconButton>
        <IconButton color={"primary"}>
          <SlSocialLinkedin />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Splash;
