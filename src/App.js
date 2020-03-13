import React from "react";
import "./App.css";
import profile_image from "./assets/img/profile_image.jpg";
import { LocationOn, LocalPhone, Email } from "@material-ui/icons";

function App() {
  const portfolioTitle = "< TUOMO HAUTALA />";
  const portfolioSubTitle = "< PORTFOLIO />";

  return (
    <div className="App">
      <div className="Portfolio-intro">
        <div className="Portfolio-profile-item Portfolio-profile-image-container">
          <img src={profile_image} alt="" className="Portfolio-profile-image" />
        </div>
        <div className="Portfolio-profile-item Portfolio-name">
          <div className="Portfolio-title ">{portfolioTitle}</div>
          <div className="Portfolio-subtitle">{portfolioSubTitle}</div>
        </div>
        <div className="Portfolio-profile-item Porfolio-contact-infos">
          <div className="Contact-item">
            <div className="Contact-item-icon">
              <LocationOn />
            </div>
            <div className="Contact-item-text-content">
              <div className="Contact-item-title">Osoite</div>
              <div className="Contact-item-text">Hultintie 192 21420 Lieto</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Porfolio-content"></div>
    </div>
  );
}

export default App;
