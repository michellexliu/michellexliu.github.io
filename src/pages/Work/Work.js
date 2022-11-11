import React, { useState } from "react";
import "./Work.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import WORK from "../../assets/work";

export default function Work() {
  const [active, setActive] = useState(0);

  return (
    <div className="about work">
      <Sidebar
        items={WORK.map((work, index) => (
          <Project key={work.name} {...work} onClick={() => setActive(index)} />
        ))}
      ></Sidebar>
      <div className="intro-container">
        <p className="heading">
          <a href={WORK[active].link}>{WORK[active].name}</a>
        </p>
        <br />
        <div className="project-images">
          {WORK[active].images.map((img, index) => (
            <img
              src={`images/${img}`}
              alt={`${WORK[active].name} number ${index}`}
              style={{ maxWidth: `${100 / WORK[active].images.length}%` }}
              key={`${WORK[active].name} number ${index}`}
            />
          ))}
        </div>
        <br />
        <div
          dangerouslySetInnerHTML={{ __html: WORK[active].description }}
        ></div>
        <br />
        <br />
      </div>
    </div>
  );
}

function Project({ name, date, link, onClick, summary, images, description }) {
  return (
    <div className="experience-container project-experience" onClick={onClick}>
      <div className="experience-header">
        <a href={link} target="_blank" rel="noreferrer">
          <b>{name}</b>
        </a>
        <p className="experience-dates">{date}</p>
      </div>
      <p className="project-summary">{summary}</p>
      <div className="mobile-project-info">
        <div className="project-images">
          {images.map((img, index) => (
            <img
              src={`images/${img}`}
              alt={`${name} number ${index}`}
              style={{ maxWidth: `${100 / images.length}%` }}
              key={`${name}-image-${index}`}
            />
          ))}
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
}
