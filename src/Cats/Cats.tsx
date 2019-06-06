import React from "react";

import styled from 'styled-components'

type CatProps = {
    cat: {
        id: string,
        url: string,
        rating: string
    }
}

const Cats = (props: CatProps) => {
    const { url, rating } = props.cat
    return (
        <CatsImgStyle src={url} alt={`Nice cat with a rating of ${rating}`}/>
    )
}

const CatsImgStyle = styled.img`
    width: 400px;
    height: 400px;
    margin: 20px;
`

export default Cats