import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { TbUnlink } from "react-icons/tb";

const Index = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"70vh"}
    >
      {/* <Avatar
        src={"/404.svg"}
        variant={"rounded"}
        sx={{
          width: "350px",
          height: "350px",
        }}
      /> */}
      <Typography variant={"body2"}>{'<a href="'}</Typography>
      <IconButton color={"primary"} size="large">
        <TbUnlink />
      </IconButton>
      <Typography variant={"body2"}>{'" alt="404"/>'}</Typography>
    </Stack>
  );
};

export default Index;
