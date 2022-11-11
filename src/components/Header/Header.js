import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getPage = () => {
    const path = location.pathname;
    const noSlash = path.replaceAll("/", "");
    console.log(noSlash);

    return noSlash === "" ? "About" : noSlash;
  };
  return (
    <header>
      <div className="titles">
        <h1 className="name">
          <Link to="/">Michelle X Liu</Link>
        </h1>
        <p className="title">{getPage()}</p>
      </div>
      <div className="nav-container">
        <Link to="/">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/play">Play</Link>
      </div>
    </header>
  );
}
