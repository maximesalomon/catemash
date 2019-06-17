import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import "./App.css"
import Navbar from "./Layout/Navbar";
import CatsContainer from "./Cats/CatsContainer";
import Leaderboard from "./Leaderboard/Leaderboard";

const App: React.FC = () => {
  const SelectAnimal: React.FC = () => (
    <>
      <H2Centered>Please select an animal species</H2Centered>
      <AnimalContainer>
        <Link to="/cats"><AnimalImgStyleCat src="https://i.ibb.co/h9fn1xj/IMG-1596.jpg" /></Link>
        <AnimalImgStyleDog src="https://scontent-cdt1-1.cdninstagram.com/vp/3162a7566c3445868f7a7e87898a5837/5DA3D271/t51.2885-15/e15/10914208_1599102233657037_1030665928_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com" />
      </AnimalContainer>
    </>
  );

  const routes = (
    <>
      <Route path="/" exact component={SelectAnimal} />
      <Route path="/cats" exact component={CatsContainer} />
      <Route path="/cats/leaderboard" exact component={Leaderboard} />
    </>
  );

  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
};

export const H2Centered = styled.h2`
  padding-top: 100px;
  padding-bottom: 40px;
  margin: 0 auto;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  width: 300px;
`;

const AnimalContainer = styled.div`
  position: relative;
  width: 680px;
  height: 100%;
  margin: 0 auto;
`;

const AnimalImgStyleCat = styled.img`
  max-width: 300px;
  max-height: 300px;
  top: 60px;
  position: absolute;
`;

const AnimalImgStyleDog = styled.img`
  max-width: 300px;
  max-height: 300px;
  right: 0;
  position: absolute;
`;

export default App;
