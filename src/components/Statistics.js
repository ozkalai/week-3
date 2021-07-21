import React from "react";
import "../styles/statistics.scss";

export default function Statistics({ allData }) {
  const allLanguages = [];
  allData.map((country) =>
    country.languages.map((lang) => allLanguages.push(lang.name))
  );

  const counts = {};
  allLanguages.forEach(function (el) {
    return (counts[el] = (counts[el] || 0) + 1);
  });

  let entries = Object.entries(counts);

  let sorted = entries.sort((a, b) => b[1] - a[1]);
  console.log(sorted);

  const topTen = sorted.slice(0, 10);

  return (
    <div className="container">
      <h3>Number of countries that speak the language</h3>
      <div>
        {topTen.map((item) => (
          <div className="usage">
            <div className="usage-detail">{`${item[0]} - ${item[1]} country`}</div>
            <div className="usage-detail"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
