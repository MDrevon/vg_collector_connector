import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import SideMenu from "../../components/sidemenu";
import TradeListTable from "../../components/tradelist";
import AddGameTradeTable from "../../components/addgametradelist";

function Tradelist() {
  const [viewTrades, setviewTrades] = useState(true);

  const handleClick = () => {
    setviewTrades(!viewTrades);
  };
  return (
    <>
      <NavBar />
      <div className="sidemenu">
        <SideMenu />
      </div>
      <div>
        <button onClick={handleClick}>
          {viewTrades ? "Add Games to Tradelist" : "View Tradelist"}
        </button>
      </div>
      <div className="collection">
        {viewTrades ? <TradeListTable /> : <AddGameTradeTable />}
      </div>
    </>
  );
}
export default Tradelist;
