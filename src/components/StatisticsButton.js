import React from "react";
import "../styles/buttons.scss";

export default function StatisticsButton({ showList, setShowList }) {
  const handleClick = () => {
    setShowList(false);
  };
  return (
    <button onClick={handleClick} className="button">
      Statistics
    </button>
  );
}
