import React from "react";
import "./App.css";
import profile_image from "./assets/img/profile_image.jpg";

import ALEntisointi_cover from "./assets/img/A.L.Entisointi_cover.JPG";
import MatchPairCardGame_cover from "./assets/img/MatchPairCardGame_cover.JPG";

import { LocationOn, LocalPhone, Email } from "@material-ui/icons";

import { ReactComponent as NetlifyIcon } from "./assets/icon/netlify.svg";
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
          netlifyUrl="https://alentisointi.netlify.com/"
          gitHubUrl={null}
        />

        <ContentItem
          title="Match Pairs Game"
          description="Game to imporove your memory by finding card pairs"
          screenshot={MatchPairCardGame_cover}
          netlifyUrl="https://matchpairsgame.netlify.com/"
          gitHubUrl="https://github.com/Tumpsq/matchpairsgame"
        />

        {/* <ContentItem
          title="Teams app"
          description="App for managing floorball games"
          screenshot={ALEntisointi_cover}
          netlifyUrl="https://teamsapp.netlify.com/"
          gitHubUrl={"https://github.com/Tumpsq/teamsapp"}
        />

        <ContentItem
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
