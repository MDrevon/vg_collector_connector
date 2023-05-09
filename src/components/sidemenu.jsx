import { React, useState, useEffect } from "react";

function SideMenu() {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/consoles")
      .then((response) => response.json())
      .then((data) => {
        setConsoles(data);
        //console.log(consoles);
      })
      .catch((error) => {
        console.error("Error fetching Consoles: ", error);
      });
  }, []);

  return (
    <div className="sidemenu">
      <p className="menu-label">Consoles</p>
      <ul>
        <li>
          <a>All Consoles</a>
        </li>
        {consoles.map((console) => (
          <li key={console.id} value={console.id}>
            <a>{console.consolename}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
