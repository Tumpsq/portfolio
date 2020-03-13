import React from "react";
import "./App.css";
import profile_image from "./assets/img/profile_image.jpg";

function App() {
  const portfolioTitle = "< TUOMO HAUTALA />";
  const portfolioSubTitle = "< PORTFOLIO />";

  return (
    <div className="App">
      <div className="Portfolio-intro">
        <img src={profile_image} alt="" className="BackgroundImage" />
        <div className="Portfolio-name">
          <p className="PortfolioTitle">{portfolioTitle}</p>
          <p className="PortfolioSubTitle">{portfolioSubTitle}</p>
        </div>
      </div>
      <div className="Porfolio-content"></div>
    </div>
  );
}

export default App;
