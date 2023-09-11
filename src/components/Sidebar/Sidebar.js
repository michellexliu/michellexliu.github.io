import React from 'react';
import './Sidebar.css';

export default function Sidebar({ items, children }) {
  return (
    <div className="sidebar-container">
      {children}
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
