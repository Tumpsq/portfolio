import React from "react";
import "./App.css";
import profile_image from "./assets/img/profile_image.jpg";
import ALEntisointi_cover from "./assets/img/A.L.Entisointi_cover.JPG";
import MatchPairCardGame_cover from "./assets/img/MatchPairCardGame_cover.JPG";
import { LocationOn, LocalPhone, Email } from "@material-ui/icons";

import ContactItem from "./components/ContactItem";
import ContentItem from "./components/ContentItem";

function App() {
  const portfolioTitle = "< TUOMO HAUTALA />";
  const portfolioSubTitle = "< PORTFOLIO />";
  const address = "Hultintie 192 21420 Lieto";
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
          description="Websites for restoration firm"
          screenshot={ALEntisointi_cover}
          hostLink="https://alentisointi.netlify.com/"
          codeLink=""
        />

        <ContentItem
          title="Match Pair Game"
          description="Game to imporove your memory by finding card pairs"
          screenshot={MatchPairCardGame_cover}
          hostLink="https://matchpairsgame.netlify.com/"
        />

        <ContentItem
          title="Teams app"
          description="Practice app for players. Admin users can create events and modify player stats and normal users can attend to them."
          screenshot={ALEntisointi_cover}
          hostLink="https://teamsapp.netlify.com/"
        />

        <ContentItem
          title="Web events"
          description="Websites for restoration firm"
          screenshot=""
          hostLink="https://eventanimations.netlify.com/"
        />

        {/* <div className="Portfolio-content-item">1</div>
        <div className="Portfolio-content-item">2</div>
        <div className="Portfolio-content-item">3</div> */}
      </div>
      <div className="Portfolio-contact-infos">
        <ContactItem icon={<LocationOn />} title="Osoite" value={address} />
        <ContactItem
          icon={<LocalPhone />}
          title="Puhelin"
          value={phoneNumber}
        />
        <ContactItem icon={<Email />} title="Email" value={emailAddress} />
      </div>
    </div>
  );
}

export default App;
