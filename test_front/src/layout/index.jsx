import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Outlet />
    </div>
  );
}
