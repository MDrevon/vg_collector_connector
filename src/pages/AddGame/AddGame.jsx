import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import SideMenu from "../../components/sidemenu";
import AddGameForm from "../../components/addgameform";

function AddGame() {
  return (
    <>
      <NavBar />
      <div className="sidemenu">
        <SideMenu />
      </div>
      <div className="collection">
        <AddGameForm />
      </div>
    </>
  );
}
export default AddGame;
