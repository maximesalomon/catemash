import React, { useState, useEffect } from 'react'

import { API, graphqlOperation } from 'aws-amplify'

const query = `
  query {
    listCats {
      items {
        id url
      }
    }
  }
`

interface ICat {
  id: string;
  url: string;
}

const App = () => { 
  const [cats, setCats] = useState([])

  async function fetchGraphqlAPI() {
    const data: any = await API.graphql(graphqlOperation(query))
    setCats(data.data.listCats.items)
  }

  useEffect(() => {
    fetchGraphqlAPI();
  }, []);

  console.log(cats)

  return (
    <div className="App">
      <h1>Catmash</h1>
    </div>
  )
}

export default App
