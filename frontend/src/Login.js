import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const setToken = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const login = () => {
    const { username, password } = user;
    if (username && password) {
      axios
        .post("http://localhost:5000/BoostCanada/Second", user)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.token);
            setToken(res.data.token);
            navigate("/Show");
          }
        });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="container">
      <div className="sub-main">
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}> Login Form </h1>
        <br />

        <div className="row">
          <div className="register">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              size="50"
              style={{
                border: "1px solid black",
              }}
            ></input>
            <br />
            <input
              className="form-control"
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              size="50"
              style={{
                border: "1px solid black",
              }}
            ></input>

            <div>
              <button id="product-button" onClick={login}>
                {" "}
                LOGIN{" "}
              </button>
              <Link to="/Signup">
                <button style={{marginLeft:'20px'}} id="product-button-cart" >
                  {" "}
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
