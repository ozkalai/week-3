import "./App.css";
import React, { useState } from "react";
import List from "./components/List";
import ListButton from "./components/ListButton";
import StatisticsButton from "./components/StatisticsButton";
import Statistics from "./components/Statistics";
import "../src/styles/buttons.scss";

function App() {
  const [showList, setShowList] = useState(true);
  return (
    <>
      <div className="App">Country App</div>
      <div className="buttons">
        <ListButton showList={showList} setShowList={setShowList} />
        <StatisticsButton showList={showList} setShowList={setShowList} />
      </div>
      {showList ? <List /> : <Statistics />}
    </>
  );
}

export default App;
