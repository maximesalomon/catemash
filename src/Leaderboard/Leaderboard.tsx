import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import { string, number } from "prop-types";

const Leaderboard: React.FC = () => {
    const [cats, setCats] = useState();

    useEffect(() => {
        listCats()
    }, [])

    async function listCats() {
        const data: any = await API.graphql(graphqlOperation(queries.listCats));
        setCats(data.data.listCats.cats)
    }

    interface ICat {
        id: string;
        url: string;
        rating: number;
    }

    return (
        <>
            <h1>LEADERBOARD</h1>
            {
                cats  === undefined ? null :

                cats.map((cat: ICat) => {
                    return <p key={cat.id}>{cat.url} - {cat.rating}</p>
                })
            }
        </>
    )
}

export default Leaderboard;