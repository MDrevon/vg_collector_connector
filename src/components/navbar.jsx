import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/Collection">
        <button>My Collection</button>
      </Link>
      <Link to="/Wishlist">
        <button>My Wishlist</button>
      </Link>
      <Link to="/Tradelist">
        <button>My Tradelist</button>
      </Link>
      <Link to="/AddGame">
        <button>Add Game</button>
      </Link>
    </div>
  );
};

export default NavBar;
