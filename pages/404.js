import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useRouter } from "next/router";

// pages/404.js
function Custom404() {
  const router = useRouter();

  return (
    <>
      <Stack
        direction={"column"}
        alignItems="center"
        minHeight={"100vh"}
        justifyContent={"center"}
        spacing={2}
      >
        <Box sx={{ "& img": { width: "90vw", maxWidth: "500px" }, mb: 3 }}>
          <img src={"/NotFound.svg"} alt={"404 - Not Found"} />
        </Box>
        <Typography variant="h4" sx={{ color: "secondary.main" }}>
          No Page Found
        </Typography>

        <Button startIcon={<AiOutlineLink />} onClick={() => router.push("/")}>
          Go To About Page
        </Button>
      </Stack>
    </>
  );
}

export default React.memo(Custom404);
