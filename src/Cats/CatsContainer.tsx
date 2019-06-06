import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import styled from 'styled-components'

import Cats from './Cats';

const queryCats = `
  query {
    getRandom(limit: 2){
      ...catFields
    }
  }

  fragment catFields on Cat {
    id
    url
    rating
  }
`;

interface ICat {
  id: string;
  url: string;
  rating: string;
}

const CatsContainer = () => {
    const [started, setStarted] = useState(false);
    const [cats, setCats] = useState([]);

    async function fetchCats() {
      const data: any = await API.graphql(graphqlOperation(queryCats));
      console.log(data.data);
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