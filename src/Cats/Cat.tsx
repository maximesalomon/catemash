import React from "react";

import styled from 'styled-components'

type CatProps = {
        id: string,
        url: string,
        rating: string
}

const Cat = ({url, rating}: CatProps) => {
    return (
        <CatsImgStyle src={url} alt={`Nice cat with a rating of ${rating}`}/>
    )
}

const CatsImgStyle = styled.img`
    width: 400px;
    height: 400px;
    margin: 20px;
`

export default Cat