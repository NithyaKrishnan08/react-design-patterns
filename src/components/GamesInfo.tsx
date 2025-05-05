interface GamesInfo {
  games: {
    gameName: string;
    gameRating: number;
    gameGenre: string;
    gameLanguages: string[];
  };
}

const GamesInfo = ({ games }: GamesInfo) => {
  const { gameName, gameRating, gameGenre, gameLanguages } = games;

  return (
    <div>
      <h1>Game Name: {gameName}</h1>
      <p>Game Rating: {gameRating}</p>
      <p>Game Genre: {gameGenre}</p>
      <ul>
        Languages:
        {gameLanguages.map((language: string, index: number) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesInfo;