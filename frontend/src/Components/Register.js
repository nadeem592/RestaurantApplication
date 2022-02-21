import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useNavigate();
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",

    email: "",

    password: "",

    confirm_password: "",
  });

  const { firstname, lastname, email, username, password, confirm_password } =
    data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    fetch("http://127.0.0.1:7001/api/register/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Registered Sccessfully.!");
          history("/login");
        } else {
          if (localStorage.getItem("username") === username) {
            alert("username already exists");
          } else {
            throw new Error("Email Taken");
          }
        }
      })
      .catch(alert);
  };
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1 align="center">Signup</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
          className="form-control"
          placeholder="Username"
          required
        />
        <span class="help-block">
          Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
        </span>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          className="form-control"
          placeholder="EMail"
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

        <div align="center">
          <input
            type="button"
            onClick={submitHandler}
            value="Register"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
