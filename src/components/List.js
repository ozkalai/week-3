import { getAllCountries } from "../services/get-countries";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/list.scss";

const List = () => {
  const [allData, setAllData] = useState(null);

  const setData = async () => {
    const result = await getAllCountries().then((res) => res.data);
    return setAllData(result);
  };
  useEffect(() => {
    setData();
  }, []);

  return (
    <div className="list">
      {allData
        ? allData.map((item) => <Card item={item} key={item.numericCode} />)
        : ""}
    </div>
  );
};

export default List;
