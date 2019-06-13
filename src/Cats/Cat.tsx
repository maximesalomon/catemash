import React, { useEffect } from "react";

import styled from "styled-components";

type CatProps = {
  id: string;
  url: string;
  rating: number;
  opponentId: string;
  opponentRating: number,
  updateRatings: any;
};

const Cat = ({ id, url, rating, opponentId, opponentRating, updateRatings }: CatProps) => {
    const calcRatings = () => {
        const catWinningChance = 1 / (1 + (Math.pow(10,((opponentRating-rating)/400))))
        const updateRating = Math.round(Math.pow(32, (1 - catWinningChance)) * 100) / 100
        updateRatings(id, (rating + updateRating) , opponentId, (rating - updateRating))
    }

  return (
    <CatsImgStyle
      onClick={() => calcRatings()}
      src={url}
      alt={`Nice cat with a rating of ${rating}`}
    />
  );
};

const CatsImgStyle = styled.img`
  width: 400px;
  height: 400px;
  margin: 20px;
`;

export default Cat;