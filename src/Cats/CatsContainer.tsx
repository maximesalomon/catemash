import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Cats from './Cats'

const query = `
  query {
    listCats(limit: 2) {
      items {
        id url rating
      }
    }
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
      <div>
          {cats.map((cat: ICat) => (
              <Cats cat={cat} />
          ))}
      </div>
    )
}

export default CatsContainer;