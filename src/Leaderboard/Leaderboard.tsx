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
    <>
      {cats.sort(sortDesc).map((cat: ICat, idx) => {
        return (
          <p>
            {idx + 1} - <CatsImgStyle key={cat.id} src={cat.url} /> Score ={" "}
            {Math.floor(cat.rating)}
          </p>
        );
      })}
    </>
  );
};

const CatsImgStyle = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

export default Leaderboard;