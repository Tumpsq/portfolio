import React from "react";

const ContentItem = ({ title, description, screenshot, hostLink }) => {
  return (
    <div
      className="Content-item"
      style={{
        backgroundImage: `url(${screenshot})`
      }}
    >
      <div className="Content-item-content">
        <div className="Content-item-title">
          <h2>{title}</h2>
        </div>
        <div className="Content-item-description">
          <h2>{description}</h2>
        </div>
        <div className="Content-item-description">
          <h2>{hostLink}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
