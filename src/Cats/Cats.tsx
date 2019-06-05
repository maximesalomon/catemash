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
    const { id, url, rating } = props.cat
    return (
        <CatsImgStyle key={id} src={url} />
    )
}

const CatsImgStyle = styled.img`
    width: 400px;
    height: 400px;
    margin: 20px;
`

export default Cats