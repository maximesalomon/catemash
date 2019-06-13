export const updateCatRating = (id, rating) => {
    return `
        mutation updateCatRating {
            updateCat(input: {
                id: "${id}",
                rating: ${rating}
            }) {
                id,
                url,
                rating
            }
        }`;
};