import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import styled from "styled-components";

interface ICat {
  id: string;
  url: string;
  rating: number;
}

const Leaderboard: React.FC = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    listCats();
  }, []);

  async function listCats() {
    const data: any = await API.graphql(graphqlOperation(queries.listCats));
    setCats(data.data.listCats.cats);
  }

  const sortDesc = (a: any, b: any) => b.rating - a.rating;

  return (
    <LeaderboardContainer>
      {cats.sort(sortDesc).map((cat: ICat, idx) => {
        return <CatsImgStyle key={cat.id} src={cat.url} />
      })}
    </LeaderboardContainer>
  );
};


const LeaderboardContainer = styled.div`
  width: 600px;
  margin: 0 auto;
`

const CatsImgStyle = styled.img`
  display: block;
  margin: 16px auto;
  max-width: 320px;
  max-height: 320px;
`;

export default Leaderboard;