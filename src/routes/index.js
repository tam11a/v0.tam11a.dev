import { Box, Container } from "@mui/material";
import React from "react";
// third party library
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Link from "../pages/Link";
import Page404 from "../pages/404";

const Index = () => {
  return (
    <Box
      sx={{
        flex: 1,
        zIndex: 10,
        overflow: "hidden",
        overflowY: "auto",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        // /* Chrome, Safari and Opera */
        // "::-webkit-scrollbar": {
        //   display: "none",
        // },

        // /* Edge, Firefox */
        // msOverflowStyle: "none",
        // scrollbarWidth: "none",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          mx: "auto",
          color: "secondary.contrastText",
          zIndex: 12,
        }}
      >
        <Routes path={"/"}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default Index;
