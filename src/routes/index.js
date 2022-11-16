import React from "react";
// third party library
import { Routes, Route } from "react-router-dom";

// pages
import Page404 from "../pages/404";

const Index = () => {
  return (
    <>
      <Routes path={"/"}>
        <Route index element={"hello world"} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Index;
