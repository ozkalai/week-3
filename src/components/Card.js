import React from "react";

import "../styles/card.scss";

export default function Card({ item }) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-flag">
          <img src={item.flag} alt="flag" />
        </div>
        <div className="card-info">{item.name}</div>
      </div>
    </div>
  );
}
