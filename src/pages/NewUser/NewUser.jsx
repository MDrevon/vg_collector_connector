import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewUser() {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };
  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      fname,
      lname,
      email,
      password,
    };
    //    console.log(userData);
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if ((data.message = "User Created")) {
          navigate("/Login");
        }
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <b>New User</b>
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            autoComplete="given-name"
            onChange={handleFNameChange}
            id="fname"
          ></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            autoComplete="family-name"
            onChange={handleLNameChange}
            id="lname"
          ></input>
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            id="email"
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            autoComplete="new-password"
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

export default NewUser;
