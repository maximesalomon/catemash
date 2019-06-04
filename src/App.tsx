import React, { useState, useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";

const query = `
  query {
    listCats {
      items {
        id url
      }
    }
  }
`;

interface ICat {
  id: string;
  url: string;
}

const App = () => {
  const [cats, setCats] = useState([]);

  async function fetchGraphqlAPI() {
    const data: any = await API.graphql(graphqlOperation(query));
    setCats(data.data.listCats.items);
  }

  useEffect(() => {
    fetchGraphqlAPI();
  }, []);

  return (
    <div className="App">
      <h1>Catmash{" "}
        <span role="img" aria-label="Cat">
          🐈
        </span>
      </h1>
      <ul>
        {cats.map((cat: ICat) => (
          <img key={cat.id} src={cat.url} />
        ))}
      </ul>
    </div>
  );
};

export default App;