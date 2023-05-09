import { useState, useEffect } from "react";

function Consoles(props) {
  const [consoles, setConsoles] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/consoles")
      .then((response) => response.json())
      .then((data) => {
        setConsoles(data);
      })
      .catch((error) => {
        console.error("Error fetching Consoles:", error);
      });
  }, []);

  const handleConsoleChange = (event) => {
    const selectedValue = event.target.value;
    props.onConsoleChange(selectedValue);
    setSelectedConsole(selectedValue);
  };

  return (
    <div>
      <label htmlFor="console">Select a Console: </label>
      <select
        id="console"
        value={selectedConsole}
        onChange={handleConsoleChange}
      >
        <option value="">--Please choose a Console--</option>
        {consoles.map((console) => (
          <option key={console.id} value={console.id}>
            {console.consolename}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Consoles;
