import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNewUser = (event) => {
    event.preventDefault();
    navigate("/NewUser");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let formData = new FormData(event.form);
    // console.log(formData);
    let loginData = {
      email,
      password,
    };
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if ((data.message = "Logged In")) {
          navigate("/Home");
        }
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <b>Login</b>
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            type="text"
            name="email"
            onChange={handleEmailChange}
            autoComplete="email"
            id="email"
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
          ></input>
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
