import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => (
  <nav className="Navbar">
    <Link to="/colors">Colors</Link>
    <br></br>
    <Link to="/colors/new">Add a Color</Link>
    <br></br>
    <Link to="/colors/:color">Get Color</Link>
  </nav>
)