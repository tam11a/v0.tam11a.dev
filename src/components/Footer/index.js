import { Box, Hidden, Stack, Typography } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <Hidden mdDown>
      <Stack
        direction={"row"}
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "space-between",
          px: 2.5,
        }}
      >
        <span></span>
        <Box
          sx={{
            "&::after": {
              content: '" "',
              display: "block",
              width: "1px",
              height: "90px",
              margin: "0px auto",
              marginTop: "10px",
              bgcolor: "#efefef",
            },
          }}
        >
          <Typography
            sx={{
              WebkitWritingMode: "vertical-rl",
              writingMode: "vertical-rl",
              color: "#efefef",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "2px",
              span: {
                color: "primary.main",
              },
              "&:hover": {
                color: "primary.main",
              },
            }}
            component={"a"}
            href={"mailto:ibrahimsadiktamim@gmail.com"}
          >
            ibrahimsadiktamim<span>@gmail.com</span>
          </Typography>
        </Box>
      </Stack>
    </Hidden>
  );
};

export default Index;
