// import React, { useState } from "react";

// function Register() {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPwd] = useState("");

//   function signup() {
//     let item = {
//       firstname,
//       lastname,
//       email,
//       username,
//       password,
//       confirmPassword,
//     };
//     fetch("http://127.0.0.1:7000/api/sign/", {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
//   return (
//     <div className="col-sm-6 offset-sm-3">
//       <h1 align="center">Signup</h1>
//       <form onSubmit={signup}>
//         <input
//           type="text"
//           value={firstname}
//           onChange={(e) => setFirstname(e.target.value)}
//           placeholder="Firstname"
//           className="form-control"
//         ></input>
//         <br />
//         <input
//           type="text"
//           value={lastname}
//           onChange={(e) => setLastname(e.target.value)}
//           placeholder="Lastname"
//           className="form-control"
//         ></input>
//         <br />
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="form-control"
//         ></input>
//         <br />
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//           className="form-control"
//         ></input>
//         <br />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="form-control"
//         ></input>
//         <br />
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPwd(e.target.value)}
//           placeholder="Confirm Password"
//           className="form-control"
//         ></input>
//         <br />
//         <input type="submit" value="Signup" />
//       </form>
//     </div>
//   );
// }

// export default Register;

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
    e.preventDefault();

    fetch("http://127.0.0.1:7001/api/register/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    history("/login");
    alert("Registered Successfully.!");
  };
  return (
    <div className="col-sm-6 offset-sm-3" align="center">
      <h1 align="center">Signup</h1>
      <form onSubmit={submitHandler}>
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
          type="text"
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

        <input type="submit" name="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Register;
