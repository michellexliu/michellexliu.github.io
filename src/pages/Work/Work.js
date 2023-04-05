import React, { useRef } from 'react';
import './Work.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import WORK from '../../assets/work';

export default function Work() {
  const itemRefs = useRef([]);

  return (
    <div className="about work">
      <Sidebar
        items={WORK.map((work, index) => (
          <Project
            projId={work.name.replace(' ', '_')}
            key={work.name}
            {...work}
            onClick={() =>
              itemRefs.current[index].scrollIntoView({ behavior: 'smooth' })
            }
          />
        ))}
      ></Sidebar>
      <div className="intro-container">
        {WORK.map((work, index) => (
          <div ref={(el) => (itemRefs.current[index] = el)}>
            <br />
            <p className="heading" id={work.name.replace(' ', '_')}>
              {work.link ? <a href={work.link}>{work.name}</a> : work.name}
            </p>
            <br />
            <div className="project-images">
              {work.images.map((img, index) => (
                <img
                  src={`images/${img}`}
                  alt={`${work.name} number ${index}`}
                  style={{ maxWidth: `${100 / work.images.length}%` }}
                  key={`${work.name} number ${index}`}
                />
              ))}
            </div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

function Project({
  projId,
  name,
  date,
  link,
  onClick,
  summary,
  images,
  description,
}) {
  return (
    <div className="experience-container project-experience" onClick={onClick}>
      <div className="experience-header">
        <b>{name}</b>
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
