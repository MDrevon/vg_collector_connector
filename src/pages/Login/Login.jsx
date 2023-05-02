import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      email,
      password,
    };

    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:3000",
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    if (localStorage.getItem("jwt")) {
      navigate("/pages/Home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <b>Login</b>
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            type="text"
            value={email}
            autoComplete="email"
            onChange={handleEmailChange}
            id="email"
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
