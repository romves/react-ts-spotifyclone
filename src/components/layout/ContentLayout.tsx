import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-neutral-900 max-w-full w-full my-2 mr-2 rounded-lg overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
