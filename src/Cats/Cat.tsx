import React from "react";

import styled from "styled-components";

type CatProps = {
  id: string;
  url: string;
  rating: number;
  opponentId: string;
  opponentRating: number;
  updateRatings: any;
  setHasVoted: any;
  hasVoted: boolean;
};

const Cat = ({
  id,
  url,
  rating,
  opponentId,
  opponentRating,
  updateRatings,
  setHasVoted,
  hasVoted
}: CatProps) => {
  const calcRatings = () => {
    const catWinningChance =
      1 / (1 + Math.pow(10, (opponentRating - rating) / 400));
    const updateRating =
      Math.round(Math.pow(32, 1 - catWinningChance) * 100) / 100;
    updateRatings(id, rating + updateRating, opponentId, rating - updateRating);
    setHasVoted(true);
  };

  return (
    <CatsImgStyle
      onClick={() => !hasVoted && calcRatings()}
      src={url}
      alt={`Nice cat with a rating of ${rating}`}
    />
  );
};

const CatsImgStyle = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin: 20px;
`;

export default Cat;
