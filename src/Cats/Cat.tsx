import React from "react";

import styled from 'styled-components'

type CatProps = {
        id: string,
        url: string,
        rating: number,
        opponentRating: number,
        showWinner: Function
}

const Cat = ({id, url, rating, showWinner}: CatProps) => {
    return (
        <CatsImgStyle onClick={() => showWinner(id)} src={url} alt={`Nice cat with a rating of ${rating}`}/>
    )
}

const CatsImgStyle = styled.img`
    width: 400px;
    height: 400px;
    margin: 20px;
`

export default Cat