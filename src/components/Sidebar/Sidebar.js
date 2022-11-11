import React from "react";
import "./Sidebar.css";

export default function Sidebar({ items }) {
  return (
    <div className="sidebar-container">
      {items.map((item, index) => {
        return (
          <div className="sidebar-item" key={`sidebar-${index}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
