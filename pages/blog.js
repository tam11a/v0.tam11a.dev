import { Stack, Typography } from "@mui/material";
import Header from "../src/components/Header";
import React from "react";
import PageContainer from "../src/components/PageContainer";

const Blog = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Stack
          direction={"column"}
          alignItems={"center"}
          minHeight={"80vh"}
          justifyContent={"center"}
          rowGap={2}
        >
          <Typography variant="h3">Blogs Page</Typography>
        </Stack>
      </PageContainer>
    </>
  );
};

export default React.memo(Blog);
