import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import CatsContainer from "./Cats/CatsContainer";

const App: React.FC = () => {
  const [hasSelectedPets, setHasSelectedPets] = useState(false);
  return (
    <div className="App">
      <h1>
        Catmash{" "}
        <span role="img" aria-label="Cat">
          🐈
        </span>
      </h1>
      {
        hasSelectedPets === false ? <Link to="/cats"><button onClick={() => setHasSelectedPets(true)}>Cats</button></Link> : null
      }
      <Route path="/cats" exact component={CatsContainer} />
      <Route path="/cats/leaderboard" exact component={Leaderboard} />
    </div>
  );
};

const Leaderboard: React.FC = () => {
  return <h1>CAT LEADERBOARD</h1>
}

export default App;