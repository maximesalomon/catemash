export const getRandom2Cats = `
    query Get2RandomCats {
        # Getting 2 cats randomly from DB
        getRandomCats(limit: 2){
            ...catFields
        }
    }

  fragment catFields on Cat {
    id
    url
    rating
  }
`;