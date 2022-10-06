import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/HomePage";
import MyCart from "../pages/MyCart";
import { RoutesMapping } from "./routesMapping";

export default function RoutesPage() {
  return (
    <Routes>
      <Route path={RoutesMapping.INIT} element={<Layout />}>
        <Route path={RoutesMapping.HOME} element={<HomePage />}></Route>
        <Route path={RoutesMapping.CART} element={<MyCart />}></Route>
      </Route>
    </Routes>
  );
}
