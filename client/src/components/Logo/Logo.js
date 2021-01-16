import React from "react";
// import classes from "./logo-style.css";
import "./logo-style.css";

const logo = props => (
  <div className="Logo">
    <img href={props.href} src={props.src} alt={props.alt} />
  </div>
);

export default logo;
