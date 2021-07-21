import React from "react";
import Card from "./Card";
import "../styles/list.scss";

const List = ({ allData }) => {
  return (
    <div className="list">
      {allData
        ? allData.map((item) => <Card item={item} key={item.numericCode} />)
        : ""}
    </div>
  );
};

export default List;
