import React from "react";
import "./App.css";
import profile_image from "./assets/img/profile_image.jpg";
import { LocationOn, LocalPhone, Email } from "@material-ui/icons";

import ContactItem from "./components/ContactItem";
import ContentItem from "./components/ContentItem";

function App() {
  const portfolioTitle = "< TUOMO HAUTALA />";
  const portfolioSubTitle = "< PORTFOLIO />";
  const address = "Hultintie 192 21420 Lieto";
  const phoneNumber = "044 301 1879";
  const emailAddress = "tuhautala@gmail.com";

  return (
    <div className="App">
      <div className="Portfolio-profile-image-container">
        <img src={profile_image} alt="" className="Portfolio-profile-image" />
      </div>
      <div className="Portfolio-name">
        <h1>{portfolioTitle}</h1>
        <h2>{portfolioSubTitle}</h2>
      </div>

      <div className="Portfolio-content">
        <div className="Portfolio-content-item">
          <div className="Portfolio-content-title">Websites</div>
          <ContentItem
            title="A.L Entisöinti"
            description="Websites for restoration firm"
            screenshot=""
            link="https://alentisointi.netlify.com/"
          />
        </div>
        <div className="Portfolio-content-item">
          <div className="Portfolio-content-title">Websites</div>
          <ContentItem
            title="A.L Entisöinti"
            description="Websites for restoration firm"
            screenshot=""
            link="https://alentisointi.netlify.com/"
          />
        </div>
        <div className="Portfolio-content-item">
          <div className="Portfolio-content-title">Websites</div>
          <ContentItem
            title="A.L Entisöinti"
            description="Websites for restoration firm"
            screenshot=""
            link="https://alentisointi.netlify.com/"
          />
        </div>
        <div className="Portfolio-content-item">
          <div className="Portfolio-content-title">Websites</div>
          <ContentItem
            title="A.L Entisöinti"
            description="Websites for restoration firm"
            screenshot=""
            link="https://alentisointi.netlify.com/"
          />
        </div>

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
