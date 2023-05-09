import NavBar from "./components/navbar";
import SideMenu from "./components/sidemenu";
import AddGameForm from "./components/addgameform";
import GameTable from "./components/gamestable";
import CollectionTable from "./components/collectiontable";
function Layout() {
  return (
    <div className="container">
      <div className="hero is-small is-primary">
        <header>
          <h2>Video Game Collector Connector</h2>
        </header>
      </div>
      <NavBar />

      <div className="column is-3 menu is-small">
        <SideMenu />
      </div>
      <div className="main-content">
        <AddGameForm />
      </div>
      <div>
        <GameTable />
      </div>
      <div>
        <CollectionTable />
      </div>
    </div>
  );
}
export default Layout;
