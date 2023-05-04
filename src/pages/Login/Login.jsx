import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewUser = (event) => {
    event.preventDefault();
    navigate("/NewUser");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.form);

    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if ((data.message = "Logged In")) {
          navigate("/Home");
        }
      });

    // if (localStorage.getItem("jwt")) {
    //   navigate("/Home");
    // }
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
            name="email"
            autoComplete="email"
            id="email"
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" id="password"></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="button" name="newUser" onClick={handleNewUser}>
            New User
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
