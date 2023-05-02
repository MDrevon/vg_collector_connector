import { useState, useEffect } from "react";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/genres")
      .then((response) => response.json())
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {
        console.error("Error fetching Genres: ", error);
      });
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <label htmlFor="genre">Select a Genre:</label>
      <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">--Please choose a Genre--</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.genrename}>
            {genre.genrename}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Genres;
