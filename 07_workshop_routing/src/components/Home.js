import HomeItem from "./HomeItem";

export default function Home({newestGames}) {
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {newestGames.length > 0 ? newestGames.map(newGame => <HomeItem key={newGame._id} {...newGame} />) : <p className="no-articles">No games yet</p>}
            </div>
        </section>
    );
};