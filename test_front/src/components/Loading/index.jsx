import React from "react";
import LoaderIcon from "../../assets/img/loader.png";
import "./style.scss";

export default function Loading() {
  return (
    <div className="spinner">
      <img src={LoaderIcon} alt="Ìcone de carregamento" />
    </div>
  );
}
