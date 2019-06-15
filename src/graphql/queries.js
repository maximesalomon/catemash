// GET 2 RANDOM CATS QUERIES

export const getCat1 = id => {
  return `
  
    query GetCat1 {
      getCat(id: "${id}"){
        ...catFields
      }
    }

    fragment catFields on Cat {
      id
      url
      rating
    }
  `;
};

export const getCat2 = id => {
  return `
    query GetCat2 {
      getCat(id: "${id}"){
        ...catFields
      }
    }

    fragment catFields on Cat {
      id
      url
      rating
    }
  `;
};

// GET LIST OF CATS
export const listCats = `
  query {
    listCats {
      cats {
        id,
        url,
        rating
      }
    }
  }
`;
