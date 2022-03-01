import { Box } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";

const Container = (props) => {
  const { children, others } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: theme.palette.background.default,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        overflowY: "auto",
        "::-webkit-scrollbar ": {
          width: "5px",
        },
        "::-webkit-scrollbar-track": {
          background: theme.palette.background.paper,
        },
        "::-webkit-scrollbar-thumb": {
          background: `${theme.palette.secondary.main}11`,
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: `${theme.palette.secondary.main}22`,
        },
      }}
      {...others}
    >
      {children}
    </Box>
  );
};

export default Container;
