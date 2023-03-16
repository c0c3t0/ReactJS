import { useEffect, useState } from "react";
import { getAllItems } from "../services/data.js";
import CatalogItem from "./CatalogItem";

export default function Catalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllItems().then(result => {
            setGames(result);
        });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ? games.map(game => <CatalogItem key={game._id} {...game} /> ) : <h3 className="no-articles">No articles yet</h3> }
        </section>
    );
};