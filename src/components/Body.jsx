import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Body() {
  return (
    <div>
      <NavBar />
      <div className="flex pt-16">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
