import Head from "next/head";
import { useState, useEffect } from "react";
import { getGamesData } from "../lib/games";
import { shuffle } from "../lib/functions";
import GameCard from "../components/GameCard";

export default function Home({ allGamesData }) {
  const [gameList, setGameList] = useState(shuffle(allGamesData));
  const [game, setGame] = useState({});

  const handleClick = () => {
    const nextGameList = gameList.slice(1);
    nextGameList.length === 0
      ? setGameList(shuffle(allGamesData))
      : setGameList(nextGameList);
  };

  /**
   * ComponentDidUpdate when gameList changes
   */
  useEffect(() => {
    setGame(gameList[0]);
  }, [gameList]);

  return (
    <div className="container">
      <Head>
        <title>PickBox | A Random Jackbox Game Generator</title>
        <meta
          name="description"
          content="Random Jackbox game generator to help you pick a game to play"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="heading">
        <h1 className="title">PickBox 🎲</h1>
        <p className="description">A Random Jackbox Game Generator</p>
      </section>
      <div className="button-container">
        <button className="button" onClick={handleClick}>
          GENERATE
        </button>
      </div>
      <GameCard
        pack={game.pack}
        name={game.name}
        minPlayers={game.minPlayers}
        maxPlayers={game.maxPlayers}
        image={game.image}
        launcher={game.launcher}
      />
    </div>
  );
}

export async function getStaticProps() {
  const allGamesData = getGamesData();

  return {
    props: {
      allGamesData,
    },
  };
}
