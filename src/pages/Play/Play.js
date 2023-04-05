import React from "react";
import Masonry from "@mui/lab/Masonry";

import "./Play.css";
import PLAY from "../../assets/play";

export default function Play() {
  return (
    <div className="about play-container">
      <p className="heading">
        A growing rolodex of personal sketches, explorations, and snapshots of
        people and images that make me happy. I wouldn't call myself an artist
        or photographer by any means, but documenting my life through pencil,
        pen, paint, film, etc. is something that grounds me.
      </p>
      <br />
      <Masonry columns={3} spacing={2}>
        {PLAY.map((item, index) => (
          <div key={index} className="play-gallery">
            <img
              src={`play/${item.img}?w=162&auto=format`}
              srcSet={`play/${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
      <Masonry columns={1} spacing={2}>
        {PLAY.map((item, index) => (
          <div key={index} className="play-gallery-mobile">
            <img
              src={`play/${item.img}?w=162&auto=format`}
              srcSet={`play/${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
