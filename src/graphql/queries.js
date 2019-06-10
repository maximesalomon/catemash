export const getCat1 = `
  query {
    getCat(id: $id){
      ...catFields
    }
  }

  fragment catFields on Cat {
    id
    url
    rating
  }
`;

export const getCat2 = `
  query {
    getCat(id: $id){
      ...catFields
    }
  }

  fragment catFields on Cat {
    id
    url
    rating
  }
`;