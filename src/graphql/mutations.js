export const updateCatRating = (id, rating) => {
  return `
        mutation {
            updateCat(input: {
                id: ${id},
                rating: "${rating}"
            }) {
                id,
                url,
                rating
            }
        }
    `;
};
