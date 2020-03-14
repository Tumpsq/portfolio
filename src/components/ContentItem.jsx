import React from "react";

const ContentItem = ({ title, description, screenshot, link }) => {
  return (
    <>
      <div className="Content-item-title">{title}</div>
      <div className="Content-item-description">{description}</div>
      <img className="Content-item-screenshot" src={screenshot} alt="" />
      <div className="Content-item-description">{link}</div>
    </>
  );
};

export default ContentItem;
