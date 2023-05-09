import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import SideMenu from "../../components/sidemenu";
import WishlistTable from "../../components/wishlist";
import AddGameWishlistTable from "../../components/addgamewishlist";

function Wishlist() {
  const [viewWishlist, setViewWishlist] = useState(true);

  const handleClick = () => {
    setViewWishlist(!viewWishlist);
  };
  return (
    <>
      <NavBar />
      <div className="sidemenu">
        <SideMenu />
      </div>
      <div>
        <button onClick={handleClick}>
          {viewWishlist ? "Add Games to Wishlist" : "View Wishlist"}
        </button>
      </div>
      <div className="collection">
        {viewWishlist ? <WishlistTable /> : <AddGameWishlistTable />}
      </div>
    </>
  );
}
export default Wishlist;
