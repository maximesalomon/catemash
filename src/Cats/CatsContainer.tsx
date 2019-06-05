import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import styled from 'styled-components'

import Cats from './Cats';

const queryIds = `
  query {
    listCats(limit: 101) {
      items {
        ...catFields
      }
    }
  }

  fragment catFields on Cat {
    id
  }
`;

const queryCats = `
  query {
    listCats(limit: 2) {
      items {
        ...catFields
      }
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
    const [ids, setIds] = useState([]);
    const [id1, setId1] = useState('');
    const [id2, setId2] = useState('');
    const [cats, setCats] = useState([]);

    const randomIds = () => {
      let randomId1 = ids[Math.floor(Math.random() * ids.length)];
      let randomId2 = ids[Math.floor(Math.random() * ids.length)];
    }

    const fetchData = async () => {
      const ids: any = await API.graphql(graphqlOperation(queryIds));
      setIds(ids.data.listCats.items);
      if (ids.length = 101) {
        let randomId1 = ids[Math.floor(Math.random() * ids.length)];
        let randomId2 = ids[Math.floor(Math.random() * ids.length)];
        setId1(randomId1);
        console.log(id1)
        const data: any = await API.graphql(graphqlOperation(queryCats));
        setCats(data.data.listCats.items);
        return null
      } else {
        return alert("Refresh page to fetch cats")    
      }
    }

    const handleClick = () => {
      setStarted(true);
      fetchData();
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