import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { random } from "lodash";
import styled from "styled-components";

import Cat from "./Cat";

const CatsContainer: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [cat1, setCat1] = useState();
  const [cat2, setCat2] = useState();
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    fetch2RandomCats();
  }, []);

  const getStarted = () => {
    setStarted(true);
  };

  const fetch2RandomCats = () => {
    const randomCat1: string = `${random(1, 99)}`;
    const randomCat2: string = `${random(1, 99)}`;
    if (randomCat1 !== randomCat2) {
      fetchCat1(randomCat1);
      fetchCat2(randomCat2);
    } else {
      fetchCat1("7");
      fetchCat2("23");
    }
  };

  async function fetchCat1(id: string) {
    const data: any = await API.graphql(graphqlOperation(queries.getCat1(id)));
    setCat1(data.data.getCat);
  }

  async function fetchCat2(id: string) {
    const data: any = await API.graphql(graphqlOperation(queries.getCat2(id)));
    setCat2(data.data.getCat);
  }

  const updateRatings = (
    winnerId: string,
    winnerNewScore: number,
    loserId: string,
    loserNewScore: number
  ) => {
    mutationUpdateCatsRating(winnerId, winnerNewScore);
    mutationUpdateCatsRating(loserId, loserNewScore);
  };

  async function mutationUpdateCatsRating(id: string, rating: number) {
    await API.graphql(graphqlOperation(mutations.updateCatRating(id, rating)));
  }

  const Catmash = !started ? (
    <ContainerStyle>
      <H2>Awesome! Let’s find the most amazing cat 🐈</H2>
      <StartButton onClick={() => getStarted()}>Start</StartButton>
    </ContainerStyle>
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
          setHasVoted={setHasVoted}
          hasVoted={hasVoted}
        />
        <Cat
          id={cat2.id}
          url={cat2.url}
          rating={cat2.rating}
          opponentId={cat1.id}
          opponentRating={cat1.rating}
          updateRatings={updateRatings}
          setHasVoted={setHasVoted}
          hasVoted={hasVoted}
        />
      </CatsContainerStyle>
      {hasVoted && (
        <NextButton
          onClick={() => {
            fetch2RandomCats();
            setHasVoted(false);
          }}
        >
          Next
        </NextButton>
      )}
    </>
  );

  return Catmash;
};

const CatsContainerStyle = styled.section`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
`;

const H2 = styled.h2`
  padding-top: 100px;
  padding-bottom: 20px;
  width: 420px;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
`;

const StartButton = styled.button`
  margin-left: 140px;
  width: 120px;
  height: 40px;
  background-color: white;
  background-repeat: no-repeat;
  border: solid 1px lightgray;
  cursor:pointer;
  overflow: hidden;        
`

const NextButton = styled.button`
  margin-top: 60px;
  margin-left: 960px;
  width: 120px;
  height: 40px;
  background-color: white;
  background-repeat: no-repeat;
  border: solid 1px lightgray;
  cursor:pointer;
  overflow: hidden;        
`

const ContainerStyle = styled.div`
  width: 480px;
  margin: 0 auto;
`

export default CatsContainer;