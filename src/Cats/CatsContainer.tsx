import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import styled from 'styled-components'

import Cats from './Cats'

const query = `
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
    const [cats, setCats] = useState([]);

    async function fetchGraphqlAPI() {
        const data: any = await API.graphql(graphqlOperation(query));
        setCats(data.data.listCats.items);
    }

    useEffect(() => {
        fetchGraphqlAPI();
    }, []);
    return (
      <CatsContainerStyle>
          {cats.map((cat: ICat) => (
              <Cats key={cat.id} cat={cat} />
          ))}
      </CatsContainerStyle>
    )
}

const CatsContainerStyle = styled.section`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
`

export default CatsContainer;