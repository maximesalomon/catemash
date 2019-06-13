import React from "react";

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
    
  return (
    <CatsImgStyle
      onClick={() => updateRatings(id, 1023, opponentId, 977)}
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