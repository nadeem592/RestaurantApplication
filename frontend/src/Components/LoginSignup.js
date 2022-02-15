import React from "react";
import { useState } from "react";
import Home from "./Home";
import Itemcard from "./Itemcard";
import Login from "./Login";

function LoginSignup() {
  return (
    <>
      <a class="btn btn-primary" href={"/login"} role="button">
        Login
      </a>
      <a class="btn btn-primary" href={"/register"} role="button">
        Signup
      </a>
      <div align="center">
        <Home />
      </div>
    </>
  );
}

export default LoginSignup;
