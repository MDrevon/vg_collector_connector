import { React, useState, useEffect } from "react";

function TradeListTable() {
  const [games, setGames] = useState([]);

  const handleClick = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:3000/api/trades/${event.target.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    }).then(() => {
      fetch("http://localhost:3000/api/trades")
        .then((response) => response.json())
        .then((data) => {
          setGames(data);
        })
        .catch((error) => {
          console.error("Error fetching Tradelist: ", error);
        });
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/trades")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error("Error fetching Tradelist: ", error);
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
            <th>Remove From Tradelist</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.gamename}</td>
              <td>{game.genrename}</td>
              <td>{game.consolename}</td>
              <td>
                <button onClick={handleClick} value={game.id}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradeListTable;
