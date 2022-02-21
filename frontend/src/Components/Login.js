import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  let [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    localStorage.setItem("logged-user", username);
    e.preventDefault();
    fetch("http://127.0.0.1:7001/api/login/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          history("/home");
        } else {
          throw new Error("Invalid Credentials..!");
        }
      })
      .catch(alert);
  };
  return (
    <div>
      <form>
        <div className="col-sm-6 offset-sm-3">
          <h1 align="center">Login</h1>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            className="form-control"
            placeholder="Username"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            className="form-control"
            placeholder="Password"
            required
          />
          <br />
          <input
            type="button"
            value="Login"
            onClick={submitHandler}
            className="btn btn-primary"
          ></input>
          <h3>
            Don't have account.? <a href={"/register"}>Signup Here</a>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
