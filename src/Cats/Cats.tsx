import React from "react";

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
            <>
                <p>Rating = {rating}</p>
                <img key={id} src={url} />
            </>
    )
}

export default Cats