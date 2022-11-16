import { Container } from "@mui/material";
import React from "react";
// third party library
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
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
      }}
    >
      <Routes path={"/"}>
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Container>
  );
};

export default Index;
