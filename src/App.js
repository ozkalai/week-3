import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/List";
import ListButton from "./components/ListButton";
import StatisticsButton from "./components/StatisticsButton";
import Statistics from "./components/Statistics";
import "../src/styles/buttons.scss";
import { getAllCountries } from "./services/get-countries";

function App() {
  const [showList, setShowList] = useState(true);
  const [allData, setAllData] = useState(null);

  const setData = async () => {
    const result = await getAllCountries().then((res) => res.data);
    return setAllData(result);
  };

  useEffect(() => {
    setData();
  }, []);

  console.log(allData);

  return (
    <>
      <div className="App">Country App</div>
      <div className="buttons">
        <ListButton showList={showList} setShowList={setShowList} />
        <StatisticsButton showList={showList} setShowList={setShowList} />
      </div>
      {showList ? <List allData={allData} /> : <Statistics allData={allData} />}
    </>
  );
}

export default App;
