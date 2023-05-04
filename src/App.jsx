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

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Login />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/NewUser" element={<NewUser />} />
    <Route path="/Tradelist" element={<Tradelist />} />
    <Route path="/Wishlist" element={<Wishlist />} />
    <Route path="/Collection" element={<Collection />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  // const [count, setCount] = useState(0);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const isAuthenticated = useAuth();
  //const navigate = useNavigate();

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
      <RouterProvider router={router} />
    </>
    // <Routes>
    //   {isAuthenticated && (
    //     <Route exact path="/pages/Home/Home" element={<Home />} />
    //   )}
    //   <Route exact path="pages/Login/Login" element={<Login />} />
    //   <Route exact path="*" element={<p>Path not resolved</p>} />
    // </Routes>
  );
}

export default App;
