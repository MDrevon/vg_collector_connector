import { React, useState, useEffect } from "react";

function GameTable(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        props.setGameList(data);
      })
      .catch((error) => {
        console.error("Error fetching Games: ", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Genre</th>
            <th>Console</th>
          </tr>
        </thead>
        <tbody>
          {props.gameList.map((game) => (
            <tr key={game.id}>
              <td>{game.gamename}</td>
              <td>{game.genrename}</td>
              <td>{game.consolename}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameTable;
