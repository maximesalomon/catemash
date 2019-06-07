import React from "react";

import CatsContainer from './Cats/CatsContainer'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Catmash{" "}
        <span role="img" aria-label="Cat">
          🐈
        </span>
      </h1>
      <CatsContainer/>
    </div>
  );
};

export default App;