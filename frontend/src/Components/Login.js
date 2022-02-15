import React, { useEffect, useState } from "react";
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
    fetch("http://127.0.0.1:7000/api/sign/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    localStorage.setItem("user-info", JSON.stringify(data));
    history("/home");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
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
            type="submit"
            value="Login"
            className="btn btn-primary"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Login;
