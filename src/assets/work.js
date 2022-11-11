const WORK = [
  {
    name: "Receiptify",
    images: [
      "receiptify_top_tracks_short_term.png",
      "receiptify_top_artists_medium_term.png",
      "receiptify_top_genres_long_term.png",
    ],
    description:
      '<p>Receiptify is a web application that generates a receipt of your most-played songs, artists, and genres from the past month, 6 months, or all time.</p><br /><p>Examining the media we consume— in this case, music— can offer a glimpse into our lives in a given period. In many ways, receipts can also serve as a powerful tool to capture moments and stories throughout the passage of time. I wanted to combine these two things in a shareable format, so that individuals can "collect" these glimpses and share them with friends and family.</p><br /><p>Today, Receiptify has garnered lots of love and support from across the world, with an average of 2.6 million users and 9 million page views per month. Receiptify is a recipient of the CMU STUDIO for Creative Inquiry\'s Frank-Ratchye Fund for Art @ the Frontier microgrant and has been mentioned in several publications, including <a target="_blank" href="https://heavy.com/news/2020/09/receiptify-spotify/">heavy.com</a>, <a href="https://www.bandwagon.asia/articles/receiptify-turns-your-top-tracks-on-spotify-into-shopping-receipts-michelle-liu">Bandwagon Asia</a>, <a target="_blank" href="https://www.popsugar.com/tech/what-is-receiptify-48268056">Popsugar</a>, and <a href="https://www.usatoday.com/story/tech/2022/06/07/spotify-pie-chart-top-genres-artists/10003057002/" target="_blank">USA Today</a>.</p>',
    summary:
      "A web application that generates a receipt of your most-played songs, artists, and genres from the past month, 6 months, or all time.",
    date: "10.2020",
    link: "https://receiptify.herokuapp.com/",
  },
  {
    name: "I Know a Place",
    images: ["iknowaplace.jpg", "iknowaplace2.jpg"],
    description:
      "<p>We all know a place and know it very well.</p><br /><p>Created in collaboration with some of my talented teammates at TEDxCMU Innovation & Salon, I Know A Place is an interactive map that celebrates Carnegie Mellon's cultural diversity through an exploration of memory and space. Users can click on any place on the map to add their own story or click on previous points to view existing stories.</p>",
    summary:
      "An interactive map that celebrates Carnegie Mellon's cultural diversity through an exploration of memory and space.",
    date: "10.2022",
    link: "https://iknowaplace.tedxcmu.org/#/",
  },
  {
    name: "Momentum",
    images: ["momentum.jpg"],
    description:
      "<p>Website developed to promote the 2022 TEDxCMU main event, created in collaboration with the TEDxCMU design and innovation teams.</p>",
    summary: "TEDxCMU 2022 event website.",
    date: "04.2022",
    link: "https://2022.tedxcmu.org/",
  },
  {
    name: "The Eternal Garden",
    images: ["eternal_garden.jpg", "lines.gif"],
    description:
      "<p>Website developed to promote the 2022 Lunar Gala fashion show, The Eternal Garden. I primarily worked on the lines page, which displayed information about each fashion line in the show. Through this project, I learned a lot about working with animations in React and had a lot of fun being a part of the creative process!</p>",
    summary: "Lunar Gala 2022 event website.",
    date: "03.2022",
    link: "https://2022.lunargala.org/#/",
  },
  {
    name: "Feedback Module",
    images: ["feedback.jpg"],
    description:
      "<p>Frustrating online experiences reflect poorly on government, undermining the public's faith in the capability of their elected officials and public servants to deliver services. In the digital-era, constituents expect governments to offer the same calibre of digital service seen in online banking, or travel. In response, governments are increasingly using various types of user research approaches, including user feedback data, to make services more accountable and transparent, while ensuring that online services resonate with constituents' heightened expectations of 21st government service provision.</p><br /><p>This was the open-source intern project I created during my time at the NYC Mayor's Office of the CTO. When deployed, an agency webmaster can request a feedback module by running a CURL request, and the system will respond with a code snippet for a feedback module, set to collect data to a unique endpoint. Once the module is embedded into a site, users can fill out the form to submit feedback, and it will automatically update to the webmaster's desired endoint.</p><br /><p>While my work was ultimately not released into production due to a re-org of the Mayor's Office, I learned a lot about web accessibility, internationalization, working in local government, programming best-practices, writing documentation, and working with Azure functions.</p>",
    summary:
      "An embeddable module generator that enables NYC government agencies to streamline user feedback processes and make digital services more accountable.",
    date: "08.2021",
    link: "https://github.com/nyc-cto/ds-ws-feedbackmodule/tree/dev",
  },
  {
    name: "BetterReads",
    images: ["betterreads.jpg"],
    description:
      '<p>BetterReads is my take on a modernized rendition of the Goodreads interface. Sparked by my utter dislike of the current Goodreads interface, I set out to create a Chrome extension that alters the Goodreads UI when enabled to be slightly more palettable to my own tastes. It currently sits at 130+ users on the Chrome webstore.</p><br /><p>While you\'re here, <a target="_blank" href="https://www.goodreads.com/user/show/118896206-michelle">add me</a> on Goodreads to see what I\'m reading right now! :)</p>',
    summary: "A modernized interface for goodreads.",
    date: "05.2021",
    link: "https://chrome.google.com/webstore/detail/modern-goodreads/ifbnfofjpbmnaennccominidogkogonm?hl=en&authuser=0",
  },
  {
    name: "Catalyst",
    images: ["catalyst.jpg"],
    description:
      "<p>Website developed to promote the 2021 TEDxCMU main event, created in collaboration with the TEDxCMU design and innovation teams. This was built in the midst of the pandemic, where in-person events weren't yet feasible. To create a more engaging experience for users, we built Catalyst as a virtual event platform, complete with a sign-in system and ticket generation.</p>",
    summary: "TEDxCMU 2021 event website.",
    date: "04.2021",
    link: "https://catalyst.tedxcmu.org/",
  },
  {
    name: "Journly",
    images: ["journly.jpg"],
    description:
      "<p>Journly is a web app with 140+ users that assesses a user's mental health by analyzing journal entries using Natural Language Processing and Sentiment Analysis. Journly assigns each journal entry a sentiment analysis score, ranging from 'very negative' to 'very positive' and shows you how your sentiment has changed over time. This project was built for Technica 2020.</p>",
    summary:
      "An intelligent journal that gives you insights on your journal entries with sentiment analysis.",
    date: "11.2020",
    link: "http://journlyapp.herokuapp.com/",
  },
];
export default WORK;
