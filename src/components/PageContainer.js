import { Box } from "@mui/material";
import React from "react";

const PageContainer = ({ children, ...others }) => {
  return (
    <Box
      sx={{ width: "98vw", maxWidth: "1300px", mx: "auto", py: 1 }}
      {...others}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
