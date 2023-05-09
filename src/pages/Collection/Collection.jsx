import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import SideMenu from "../../components/sidemenu";
import CollectionTable from "../../components/collectiontable";
import AddGameCollectionTable from "../../components/addgamecollectiontable";

function Collection() {
  const [viewCollection, setViewCollection] = useState(true);

  const handleClick = () => {
    setViewCollection(!viewCollection);
  };
  return (
    <>
      <NavBar />
      <div className="sidemenu">
        <SideMenu />
      </div>
      <div>
        <button onClick={handleClick}>
          {viewCollection ? "Add Games to Collection" : "View Collection"}
        </button>
      </div>
      <div className="collection">
        {viewCollection ? <CollectionTable /> : <AddGameCollectionTable />}
      </div>
    </>
  );
}
export default Collection;
