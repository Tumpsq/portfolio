import React from "react";
import "./App.css";
import profile_image from "./assets/img/profile_image.jpg";

import ALEntisointi_cover from "./assets/img/A.L.Entisointi_cover.JPG";
import TuomoHautalaPhotography_cover from "./assets/img/tuomohautalaphotography_cover.jpg";
import MatchPairCardGame_cover from "./assets/img/MatchPairCardGame_cover.JPG";
import MovieBrowser_cover from "./assets/img/MovieBrowser_cover.JPG";
import FoliTracking_cover from "./assets/img/FoliTracking_cover.png";
import Trackingfinland_cover from "./assets/img/Trackingfinland_cover.png";

import { LocalPhone, Email } from "@material-ui/icons";

import { ReactComponent as GithubIcon } from "./assets/icon/github.svg";

import ContactItem from "./components/ContactItem";
import ContentItem from "./components/ContentItem";

function App() {
  const portfolioTitle = "< TUOMO HAUTALA />";
  const portfolioSubTitle = "< PORTFOLIO />";
  const gitHubAddress = "https://github.com/Tumpsq";
  const phoneNumber = "+358 44 301 1879";
  const emailAddress = "tuhautala@gmail.com";

  return (
    <div className="App">
      <div>
        <div className="Portfolio-profile-image-container">
          <img src={profile_image} alt="" className="Portfolio-profile-image" />
        </div>
        <div className="Portfolio-name">
          <h1>{portfolioTitle}</h1>
          <h2>{portfolioSubTitle}</h2>
        </div>
      </div>

      <div className="Portfolio-content">
        <ContentItem
          title="A.L Entisöinti"
          description="Website for restoration firm"
          screenshot={ALEntisointi_cover}
          netlifyUrl="https://alentisointi.netlify.app/"
          gitHubUrl={null}
        />

        <ContentItem
          title="Tuomo Hautala Photography"
          description="Photo showcasing app for photographers"
          screenshot={TuomoHautalaPhotography_cover}
          netlifyUrl="https://tuomohautalaphotography.netlify.app/"
          gitHubUrl="https://github.com/Tumpsq/photoportfolio"
        />

        <ContentItem
          title="Match Pairs Game"
          description="Game to imporove your memory by finding card pairs"
          screenshot={MatchPairCardGame_cover}
          netlifyUrl="https://matchpairsgame.netlify.app/"
          gitHubUrl="https://github.com/Tumpsq/matchpairsgame"
        />

        <ContentItem
          title="Moviebrowser"
          description="App for browsing movies by popularity & genres"
          screenshot={MovieBrowser_cover}
          netlifyUrl="https://tumpsqsmoviebrowser.netlify.app/"
          gitHubUrl="https://github.com/Tumpsq/moviebrowser"
        />
        <ContentItem
          title="Tracking Finland"
          description="App for different kind of things provided by open data apis"
          screenshot={Trackingfinland_cover}
          netlifyUrl="https://trackingfinland.netlify.app/"
          gitHubUrl="https://github.com/Tumpsq/trackingfinland"
        />
        <ContentItem
          title="Foli Tracking"
          description="Experimental website for tracking Föli bus traffic and bike rack status at Turku. API can be found at https://data.foli.fi/doc/index"
          screenshot={FoliTracking_cover}
          netlifyUrl="https://folitracking.netlify.app/"
          gitHubUrl="https://github.com/Tumpsq/folitracking"
        />

        {/* <ContentItem
          title="Web events"
          description="Websites for restoration firm"
          screenshot=""
          netlifyUrl="https://eventanimations.netlify.com/"
          gitHubUrl={null}
        /> */}

        {/* <div className="Portfolio-content-item">1</div>
        <div className="Portfolio-content-item">2</div>
        <div className="Portfolio-content-item">3</div> */}
      </div>
      <div className="Portfolio-contact-infos">
        <a
          href="https://github.com/Tumpsq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactItem
            icon={<GithubIcon />}
            title="GitHub"
            value={gitHubAddress}
          />
        </a>
        <a href="tel:+358-44-301-1879">
          <ContactItem
            icon={<LocalPhone />}
            title="Phone"
            value={phoneNumber}
          />
        </a>
        <a href="mailto:tuhautala@gmail.com">
          <ContactItem icon={<Email />} title="Email" value={emailAddress} />
        </a>
      </div>
    </div>
  );
}

export default App;
