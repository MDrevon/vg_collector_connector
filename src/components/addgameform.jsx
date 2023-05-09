import { React, useState, useEffect } from "react";
import Consoles from "./consoles";
import Genres from "./genres";
import GameTable from "./gamestable";

function AddGameForm() {
  const [gamename, setGameName] = useState("");
  const [consoleId, setConsoleId] = useState("");
  const [genreId, setGenreId] = useState("");
  const [gameList, setGameList] = useState([]);

  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const handleGenreChange = (genre) => {
    setGenreId(genre);
  };

  const handleConsoleChange = (console) => {
    setConsoleId(console);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const gameData = {
      gamename,
      consoleId,
      genreId,
    };

    console.log(gameData);
    fetch("http://localhost:3000/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(gameData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .then(() => {
        fetch("http://localhost:3000/api/games")
          .then((response) => response.json())
          .then((data) => {
            setGameList(data);
          })
          .catch((error) => {
            console.error("Error fetching Games: ", error);
          });
      })
      .catch((error) => {
        console.error("Error adding game: ", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <b>Add Game</b>
        </div>
        <div>
          <label>Game Name:</label>
          <input onChange={handleGameNameChange}></input>
        </div>
        <Genres onGenreChange={handleGenreChange} />
        <Consoles onConsoleChange={handleConsoleChange} />
        <div>
          <button type="submit">Add Game</button>
        </div>
      </form>
      <div className="collection">
        <GameTable gameList={gameList} setGameList={setGameList} />
      </div>
    </div>
  );
}

export default AddGameForm;
