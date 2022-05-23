import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return(
    <div className="header">
      <NavLink to="/weatherlocation">Location</NavLink>
      <br></br>
      <NavLink to="/weatherplanner">Planner</NavLink>
    </div>
  )
}