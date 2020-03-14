import React from "react";

const ContactItem = ({ icon, title, value }) => {
  return (
    <div className="Contact-item">
      <div className="Contact-item-icon">{icon}</div>
      <div className="Contact-item-text-content">
        <div className="Contact-item-title">
          <h3>{title}</h3>
        </div>
        <div className="Contact-item-text">
          <h4>{value}</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
