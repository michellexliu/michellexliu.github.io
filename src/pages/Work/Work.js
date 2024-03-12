import React, { useState } from 'react';
import './Work.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import WORK from '../../assets/work';
import EXPERIENCE from '../../assets/experience';

export default function Work() {
  const [work, setWork] = useState(WORK[0]);
  return (
    <div className="about work">
      <Sidebar
        items={EXPERIENCE.map((exp) => (
          <Experience
            {...exp}
            dates={[exp.dates.start, exp.dates.end ?? 'Present']}
          />
        ))}
      >
        <div className="description">
          <p className="bio">
            Hi! I'm a software engineer passionate about creating engaging
            experiences, fostering social connection, and provoking
            conversations through my work.
          </p>
          <br />
          <p>
            Currently studying{' '}
            <i>
              Information Systems / Computer Science / Human-Computer
              Interaction
            </i>{' '}
            @ Carnegie Mellon University.
          </p>
          <div className="contact">
            <a href="mailto:michelleliu@cmu.edu">Email</a>
            <a href="https://github.com/michellexliu">GitHub</a>
            <a href="https://www.linkedin.com/in/mliu3259/">LinkedIn</a>
            <a href="https://www.instagram.com/michellexyliu_/">Instagram</a>
            <a href="https://open.spotify.com/user/kv9bz861mybb4364hwnjx4uip?si=1326e0649403470e">
              Spotify
            </a>
          </div>
          <p className="section-header pt-6">EXPERIENCE</p>
        </div>
      </Sidebar>
      <div className="intro-container">
        <p className="section-header projects-header">SELECTED WORK</p>
        <div className="project-links">
          {WORK.map((w) => (
            <p
              onClick={() => setWork(w)}
              className={work.name === w.name && 'selected-project'}
            >
              {w.name}
            </p>
          ))}
        </div>
        <div className="projects-container">
          <div>
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="project-images"
            >
              {work.images.map((img, index) => (
                <img
                  src={`images/${img}`}
                  alt={`${work.name} number ${index}`}
                  style={{ maxWidth: `${100 / work.images.length}%` }}
                  key={`${work.name} number ${index}`}
                />
              ))}
            </a>
            <p
              className="heading project-heading"
              id={work.name.replace(' ', '_')}
            >
              {work.name}
            </p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
            <br />
            <br />
          </div>
        </div>
        <div className="mobile-project-info">
          {WORK.map((work) => (
            <div>
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="project-images"
              >
                {work.images.map((img, index) => (
                  <img
                    src={`images/${img}`}
                    alt={`${work.name} number ${index}`}
                    style={{ maxWidth: `${100 / work.images.length}%` }}
                    key={`${work.name} number ${index}`}
                  />
                ))}
              </a>
              <p
                className="heading project-heading"
                id={work.name.replace(' ', '_')}
              >
                {work.name}
              </p>
              <br />
              <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience({ name, dates, description, position, link }) {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <a href={link} target="_blank" rel="noreferrer">
          <b>{name}</b>
        </a>
        <p className="experience-dates">{dates.join('-')}</p>
      </div>
      <p className="experience-position">{position}</p>
      <p>{description}</p>
    </div>
  );
}
