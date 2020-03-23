import React from "react";
import { ReactComponent as NetlifyIcon } from "../assets/icon/netlify.svg";
import { ReactComponent as GithubIcon } from "../assets/icon/github.svg";

const ContentItem = ({
  title,
  description,
  screenshot,
  netlifyUrl,
  gitHubUrl
}) => {
  return (
    <div className="Content-item">
      <div
        className="Content-item-background"
        style={{
          backgroundImage: `url(${screenshot})`
        }}
      />
      <div className="Content-item-content">
        <div className="Content-item-title">
          <h2>{title}</h2>
        </div>
        <div className="Content-item-description">
          <h4>{description}</h4>
        </div>
      </div>
      <div className="Content-item-links">
        {netlifyUrl && (
          <a href={netlifyUrl} target="_blank" rel="noopener noreferrer">
            <div className="Content-item-link">
              <NetlifyIcon />
              <h2>Netflify</h2>
            </div>
          </a>
        )}
        {gitHubUrl && (
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            <div className="Content-item-link">
              <GithubIcon />
              <h2>Github</h2>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentItem;
