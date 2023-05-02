import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // check if the user is authenticated
    const isAuthenticated = false; // replace with actual authentication check
    if (localStorage.getItem("jwt")) {
      setIsAuthenticated(isAuthenticated);
    }

    if (!isAuthenticated) {
      // if not authenticated, redirect to login page
      navigate("/pages/Login/login");
    }
  }, [navigate]);
  0;

  return isAuthenticated;
}

export default useAuth;
