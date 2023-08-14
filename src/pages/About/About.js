import React from 'react';
import './About.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import EXPERIENCE from '../../assets/experience';
import me from '../../assets/me.jpg';

export default function About() {
  return (
    <div className="about">
      <Sidebar
        items={EXPERIENCE.map((exp) => (
          <Experience
            {...exp}
            dates={[exp.dates.start, exp.dates.end ?? 'Present']}
          />
        ))}
      ></Sidebar>
      <div className="intro-container about-intro-container">
        <p className="heading">Hi, I'm Michelle.</p>
        <br />
        <div className="info-section">
          <div className="text">
            <p>
              I study Information Systems at Carnegie Mellon University, with
              minors in Computer Science and Human-Computer Interaction. I'm
              originally from Maryland and am currently based in Pittsburgh.
            </p>
            <br />
            <p>
              I enjoy working on creative web tools and creating engaging
              experiences through technology. Currently, I'm most interested in
              working on educational technology, examining how we can facilitate
              social connection through data, and building interactive
              experiences with technology.
            </p>
            <br />
            <p>Things I'm exploring right now:</p>
            <ul>
              <li>Projection mapping</li>
              <li>Rapid prototyping</li>
              <li>Interaction design</li>
              <li>Mobile development</li>
              <li>Cooking</li>
              <li>Physical prototyping</li>
            </ul>
            <br />
            <p>Things I want to learn more about:</p>
            <ul>
              <li>Data visualization</li>
              <li>Distributed systems</li>
              <li>Film photography</li>
              <li>Art history</li>
              <li>Mixology</li>
            </ul>
            <br />
            <p>Things I enjoy:</p>
            <ul>
              <li>
                Curating{' '}
                <a
                  href="https://open.spotify.com/user/kv9bz861mybb4364hwnjx4uip?si=0b9d05c54a114e3e"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify playlists
                </a>{' '}
                (I have over 100!)
              </li>
              <li>Functional programming</li>
              <li>Indie rock</li>
              <li>0.5x lens selfies</li>
              <li>Cold brew</li>
              <li>Watching the leaves turn red in the fall</li>
            </ul>
            <div className="contact">
              <a href="mailto:michelleliu@cmu.edu">Email</a>
              <a href="https://github.com/michellexliu">GitHub</a>
              <a href="https://www.linkedin.com/in/mliu3259/">LinkedIn</a>
            </div>
          </div>
          <img src={me} className="pic" alt="a headshot of me!" />
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
