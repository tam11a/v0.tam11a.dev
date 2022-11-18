import { Container } from "@mui/material";
import React from "react";
// third party library
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Page404 from "../pages/404";

const Index = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        // bgcolor: "background.paper",
        color: "secondary.contrastText",
        py: 1.5,
        flex: 1,
        zIndex: 10,
        overflow: "hidden",
        overflowY: "auto",

        /* Chrome, Safari and Opera */
        "::-webkit-scrollbar": {
          display: "none",
        },

        /* Edge, Firefox */
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Routes path={"/"}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Container>
  );
};

export default Index;
