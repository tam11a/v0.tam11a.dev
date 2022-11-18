import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { TbUnlink } from "react-icons/tb";

const Index = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"80%"}
      >
        <Typography variant={"body2"}>{"<About.component>"}</Typography>
        <IconButton color={"primary"} size="large">
          <TbUnlink />
        </IconButton>
        <Typography variant={"body2"}>{"</About.component>"}</Typography>
      </Stack>
    </>
  );
};

export default Index;
