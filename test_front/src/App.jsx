import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesPage from "./route";

function App() {
  return (
    <BrowserRouter>
      <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
