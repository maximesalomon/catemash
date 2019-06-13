import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { random } from "lodash";
import styled from "styled-components";

import Cat from "./Cat";

interface ICat {
  id: string;
  url: string;
  rating: string;
}

const CatsContainer: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [cat1, setCat1] = useState();
  const [cat2, setCat2] = useState();

  useEffect(() => {
    fetch2RandomCats();
  }, []);

  const getStarted = () => {
    setStarted(true);
  };

  const fetch2RandomCats = () => {
    const randomCat1: string = `${random(1, 99)}`;
    fetchCat1(randomCat1);
    const randomCat2: string = `${random(1, 99)}`;
    fetchCat2(randomCat2);
  };

  async function fetchCat1(id: string) {
    const data: any = await API.graphql(graphqlOperation(queries.getCat1(id)));
    setCat1(data.data.getCat);
  }

  async function fetchCat2(id: string) {
    const data: any = await API.graphql(graphqlOperation(queries.getCat2(id)));
    setCat2(data.data.getCat);
  }

  const updateRatings = ( winnerId: string, winnerNewScore: number, loserId: string, loserNewScore: number ) => {
    console.log(winnerNewScore)
    mutationUpdateCatsRating(winnerId, winnerNewScore);
    mutationUpdateCatsRating(loserId, loserNewScore);
  };

  async function mutationUpdateCatsRating(id: string, rating: number) {
    await API.graphql(graphqlOperation(mutations.updateCatRating(id, rating)));
  }

  const start =
    started === false ? (
      <button onClick={() => getStarted()}>Start</button>
    ) : (
      <>
        <CatsContainerStyle>
          <Cat
            id={cat1.id}
            url={cat1.url}
            rating={cat1.rating}
            opponentId={cat2.id}
            opponentRating={cat1.rating}
            updateRatings={updateRatings}
          />
          <Cat
            id={cat2.id}
            url={cat2.url}
            rating={cat2.rating}
            opponentId={cat1.id}
            opponentRating={cat1.rating}
            updateRatings={updateRatings}
          />
        </CatsContainerStyle>
        <button onClick={() => fetch2RandomCats()}>Next</button>
      </>
    );

  return start;
};

const CatsContainerStyle = styled.section`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
`;

export default CatsContainer;