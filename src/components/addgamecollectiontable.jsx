import { useState, useEffect } from "react";

function AddGameCollectionTable(props) {
  const [games, setGames] = useState([]);

  const addGame = async (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    let userid = 2;
    let gameid = event.target.value;
    const gameData = { userid, gameid };
    await fetch(`http://localhost:3000/api/collections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(gameData),
    }).then((response) =>
      response.json().then((data) => {
        if ((data.message = "Game added to Collection")) {
          fetch("http://localhost:3000/api/addcollection")
            .then((response) => response.json())
            .then((data) => {
              setGames(data);
              //props.setGameList(data);
            })
            .catch((error) => {
              console.error("Error fetching Games: ", error);
            });
        }
      })
    );
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/addcollection")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        //props.setGameList(data);
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
            <th>Add Game</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.gamename}</td>
              <td>{game.genrename}</td>
              <td>{game.consolename}</td>
              <td>
                <button onClick={addGame} value={game.id}>
                  Add Game
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddGameCollectionTable;
