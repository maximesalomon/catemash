import React from "react";
import { Route } from "react-router-dom";

import CatsContainer from "./Cats/CatsContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>
        Catmash{" "}
        <span role="img" aria-label="Cat">
          🐈
        </span>
      </h1>
      <Route path="/cats" exact component={CatsContainer} />
      <Route path="/cats/leaderboard" exact component={Leaderboard} />
    </div>
  );
};

const Leaderboard: React.FC = () => {
  return <h1>CAT LEADERBOARD</h1>
}

export default App;