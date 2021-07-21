import React from "react";
import "../styles/buttons.scss";

export default function ListButton({ showList, setShowList }) {
  const handleClick = () => {
    setShowList(true);
  };
  return (
    <button onClick={handleClick} className="button">
      Countries List
    </button>
  );
}
