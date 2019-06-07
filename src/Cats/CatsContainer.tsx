import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';
import styled from 'styled-components'

import Cats from './Cats';

interface ICat {
  id: string;
  url: string;
  rating: string;
}

const CatsContainer: React.FC = () => {
    const [started, setStarted] = useState(false);
    const [cats, setCats] = useState([]);

    async function fetchCats() {
      const data: any = await API.graphql(graphqlOperation(queries.getRandom2Cats));
      console.log(data.data.getRandomCats);
      setCats(data.data.getRandomCats)
    }

    const handleClick = () => {
      setStarted(true);
      fetchCats();
    }

    const start = started === false
      ? <button onClick={() => handleClick()}>Start</button>
      : <CatsContainerStyle>
          {cats.map((cat: ICat) => (
                <Cats key={cat.id} cat={cat} />
            ))}
        </CatsContainerStyle>
    return (
      start
    )
}

const CatsContainerStyle = styled.section`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
`

export default CatsContainer;