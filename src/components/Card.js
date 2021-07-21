import React from "react";
import { FaLanguage } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";

import "../styles/card.scss";

export default function Card({ item }) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-flag">
          <img src={item.flag} alt="flag" />
        </div>
        <p className="card-name">{item.name}</p>
        <div className="card-info">
          {item.languages[0].name ? (
            <div className="card-icon">
              <FaLanguage />
            </div>
          ) : (
            ""
          )}
          <div className="card-info-lang">{`${item.languages[0].name}`}</div>
          {item.capital ? (
            <div className="card-icon">
              <GiModernCity />
            </div>
          ) : (
            ""
          )}
          <div className="card-info-capital">
            {item.capital
              ? `
          ${item.capital}`
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
