import React from 'react';
import './About.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import EXPERIENCE from '../../assets/experience';
import me from '../../assets/me.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="intro-container about-intro-container">
        <img src={me} className="pic" alt="a headshot of me!" />
        <div>
          <p className="heading">Hi, I'm Michelle.</p>
          <br />
          <p>
            I'm currently studying{' '}
            <i>
              Information Systems, Computer Science, and Human-Computer
              Interaction
            </i>{' '}
            at Carnegie Mellon University. I'm originally from Maryland and am
            currently based in Pittsburgh.
          </p>
          <br />
          <p>
            Right now, I'm helping build{' '}
            <a
              href="https://www.joinswsh.com/"
              target="_blank"
              rel="noreferrer"
            >
              swsh
            </a>
            , a social media platform for friends, not followers.
          </p>
          <br />
          <p>
            I enjoy working on creative web tools and creating engaging
            experiences through technology. I'm most interested in working on
            educational technology and examining how we can facilitate social
            connection through data.
          </p>
          <div className="info-section">
            <div className="text">
              <br />
              <p>
                <b>Things I'm exploring right now:</b> projection mapping,
                mobile development, physical prototyping, cooking,
                entrepeneuership
              </p>
              <br />
              <p>
                <b>Things I want to learn more about:</b> data visualization,
                distributed systems, film photography, art history, mixology,
                WebGL, Three.js, dj-ing, gender studies, film, philosophy,
                LLM's, drumming
              </p>
              <br />
              <p>
                <b>Things I enjoy:</b> curating{' '}
                <a
                  href="https://open.spotify.com/user/kv9bz861mybb4364hwnjx4uip?si=0b9d05c54a114e3e"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify playlists
                </a>{' '}
                (I have over 100!), bouldering, functional programming, indie
                rock, waking up with the sun, cold brew, watching leaves turn
                red in the fall, horror movies, watching the swans and geese
                near my neighborhood pond at sunset, running on the West Side
                Highway
              </p>
              <br />
              <p>
                <b>Current favorites:</b>
              </p>
              <ul>
                <li>
                  <b>Movies</b>: <i>Before Sunset</i>, <i>Whiplash</i>,{' '}
                  <i>Aftersun</i>, <i>Short Term 12</i>, <i>Moonlight</i>
                </li>
                <li>
                  <b>Books</b>: <i>Writers & Lovers</i> by Lily King,{' '}
                  <i>In the Dream House</i> by Carmen Maria Machado,{' '}
                  <i>Either / Or</i> by Elif Batuman,{' '}
                  <i>The Remains of the Day</i> by Kazuo Ishiguro,{' '}
                  <i>Another Country</i> by James Baldwin
                </li>
                <li>
                  <b>Artists</b>: Elliott Smith, Boygenius, Alice Phoebe Lou,
                  Bright Eyes, Mac Miller
                </li>
                <li>
                  <b>Shows</b>: The Haunting of Hill House, Masterchef, Dead to
                  Me, Bojack Horseman, The Last of Us
                </li>
                <li>
                  <b>Places</b>: Copenhagen, the golf course next to my house (I
                  don't actually golf, just trespass), Amsterdam, Target in the
                  suburbs, Gantry Plaza State Park, Flagstaff hill
                </li>
              </ul>
              <div className="contact">
                <a href="mailto:michelleliu@cmu.edu">Email</a>
                <a href="https://github.com/michellexliu">GitHub</a>
                <a href="https://www.linkedin.com/in/mliu3259/">LinkedIn</a>
                <a href="https://www.instagram.com/mchelle.liu/">Instagram</a>
                <a href="https://open.spotify.com/user/kv9bz861mybb4364hwnjx4uip?si=1326e0649403470e">
                  Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
