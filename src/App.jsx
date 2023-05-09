import { useEffect, useState } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import Tradelist from "./pages/Tradelist/Tradelist";
import Wishlist from "./pages/Wishlist/Wishlist";
import Collection from "./pages/Collection/Collection";
import AddGame from "./pages/AddGame/AddGame";
import Layout from "./layout";
import Flexbox from "./flexbox";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Flexbox />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/NewUser" element={<NewUser />} />
    <Route path="/Tradelist" element={<Tradelist />} />
    <Route path="/Wishlist" element={<Wishlist />} />
    <Route path="/Collection" element={<Collection />} />
    <Route path="/AddGame" element={<AddGame />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const isAuthenticated = useAuth();

  // useEffect(() => {
  //   setIsAuthenticated(useAuth());
  // }, []);

  // if (!isAuthenticated) {
  //   console.log(isAuthenticated);
  //   return (
  //     <Routes>
  //       <Route exact path="pages/Login/Login" element={<Login />} />
  //     </Routes>
  //   );
  //   //<Navigate to="/pages/Login/Login" element={<Login />} />;
  // }

  return (
    <>
      <div className="container">
        <div className="title">Video Game Collector Connector</div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
