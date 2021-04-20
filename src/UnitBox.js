import React from "react";
import "./UnitBox.css";

function UnitBox({ text = "", onClick }) {
  return (
    <div className="unitbox" onClick={onClick}>
      <h1 className="unitbox__text">{text}</h1>
    </div>
  );
}

export default UnitBox;
