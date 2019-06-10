import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';
import { random } from 'lodash';
import styled from 'styled-components'

import Cat from './Cat';

interface ICat {
  id: string;
  url: string;
  rating: string;
}

const CatsContainer: React.FC = () => {
    const [started, setStarted] = useState(false);
    const [cat1, setCat1] = useState();
    const [cat2, setCat2] = useState();

    const handleClick = () => {
      setStarted(true);
    }

    useEffect(() => {
        fetchCat1()
        fetchCat2()
    }, [])

    async function fetchCat1() {
      const data: any = await API.graphql(graphqlOperation(queries.getCat1: {id: "lola"})
      setCat1(data.data.getCat);
    }

    async function fetchCat2() {
      const data: any = await API.graphql(graphqlOperation(queries.getCat2))
      setCat2(data.data.getCat);
    }

    const start = started === false
      ? <button onClick={() => handleClick()}>Start</button>
      : <CatsContainerStyle>
          <Cat id={cat1.id} url={cat1.url} rating={cat1.rating} />
          <Cat id={cat2.id} url={cat2.url} rating={cat2.rating} />
        </CatsContainerStyle>
    
    return start
}

const CatsContainerStyle = styled.section`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
`

export default CatsContainer;
